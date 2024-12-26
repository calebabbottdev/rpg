import React, { useState } from 'react';

// Data
import { items, getItemById, Item } from 'src/data/items/items';
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
  experienceGiven: 5,
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
  const [inventory, setInventory] = useState<Item[]>([]);

  const expForNextLevel = getSkillById('mining')!.experienceCurve(
    miningLevel + 1,
  );

  const handleMine = (ore: Ore) => {
    if (miningLevel < ore.levelRequired) {
      console.log(
        `You need a Mining level of ${ore.levelRequired} to mine ${ore.name}`,
      );
      return;
    }

    const success = Math.random() < 0.9;
    if (success) {
      setExperience((prevExperience) => {
        const newExperience = prevExperience + ore.experienceGiven;

        if (newExperience >= expForNextLevel) {
          setMiningLevel((prevLevel) => prevLevel + 1);
        }
        return newExperience;
      });

      setInventory((prevInventory) => [...prevInventory, ore.drop]);

      console.log(inventory);
    } else {
      console.log(`You failed to mine ${ore.name}`);
    }
  };

  return (
    <div>
      {inventory.map((item) => (
        <p>{item.name}</p>
      ))}
      <p>Mining level: {miningLevel}</p>
      <p>Experience: {experience}</p>
      <p>Exp to next level: {expForNextLevel - experience}</p>

      {ores.map((ore) => (
        <button onClick={() => handleMine(ore)}>Mine {ore.name}</button>
      ))}
    </div>
  );
};

export default Mining;
