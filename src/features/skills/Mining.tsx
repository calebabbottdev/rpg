import React, { useState } from 'react';

// Data
import { getItemById, Item } from 'src/data/items/items';
import { getSkillById } from 'src/data/skills/skills';

import player from 'src/db/player.json';

type Ore = {
  id: string;
  name: string;
  levelRequired: number;
  experienceGiven: number;
  drop: Item;
};

const copper: Ore = {
  id: 'copper_ore',
  name: 'Copper Ore',
  levelRequired: 1,
  experienceGiven: 300000,
  drop: getItemById('copper_ore')!,
};

const tin: Ore = {
  id: 'tin_ore',
  name: 'Tin Ore',
  levelRequired: 1,
  experienceGiven: 5,
  drop: getItemById('tin_ore')!,
};

const iron: Ore = {
  id: 'iron_ore',
  name: 'Iron Ore',
  levelRequired: 15,
  experienceGiven: 20,
  drop: getItemById('iron_ore')!,
};

const ores: Ore[] = [copper, tin, iron];

const Mining: React.FC = () => {
  const [miningLevel, setMiningLevel] = useState<number>(player.skills.mining);
  const [experience, setExperience] = useState<number>(0);
  const [inventory, setInventory] = useState<Item[]>(player.inventory);

  const { experienceRemaining, experienceForNextLevel } = getSkillById(
    'mining',
  )!.experienceCurve(miningLevel, experience);

  const handleMine = (ore: Ore) => {
    if (miningLevel < ore.levelRequired) {
      console.log(
        `You need a Mining level of ${ore.levelRequired} to mine ${ore.name}.`,
      );
      return;
    }

    const skill = getSkillById('mining')!;
    setExperience((prevExperience) => {
      const { newLevel, remainingExperience } = skill.calculateNewLevel(
        miningLevel,
        prevExperience,
        ore.experienceGiven,
      );

      setMiningLevel(newLevel);
      return remainingExperience;
    });

    setInventory((prevInventory) => [...prevInventory, ore.drop]);
  };

  return (
    <div>
      <p>Items in inventory: {inventory.length}</p>

      <p>Mining level: {miningLevel}</p>
      <p>Experience: {experience}</p>
      <p>Exp to next level: {experienceRemaining}</p>
      <p>
        Total exp to reach {miningLevel + 1}: {experienceForNextLevel}
      </p>

      {ores.map((ore) => (
        <button key={ore.id} onClick={() => handleMine(ore)}>
          Mine {ore.name}
        </button>
      ))}
    </div>
  );
};

export default Mining;
