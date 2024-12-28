import React, { useState } from 'react';

// Data
import { getItemById, Item } from 'src/data/items/items';
import {
  levelForTotalExp,
  totalExperienceForLevel,
} from 'src/data/skills/skills';

// Redux
import { store, RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { gainExperience } from 'features/skills/skillsSlice';

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
  experienceGiven: 333804,
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
  const dispatch = useDispatch();
  const miningSkill = useSelector((state: RootState) => state.skills.mining);

  //   );
  //   const [inventory, setInventory] = useState<Item[]>(player.inventory);

  //   const { experienceRemaining, experienceForNextLevel } = getSkillById(
  //     'mining',
  //   )!.experienceCurve(miningLevel, experience);

  const handleMine = (ore: Ore) => {
    if (miningSkill.level < ore.levelRequired) {
      console.log(
        `You need a Mining level of ${ore.levelRequired} to mine ${ore.name}.`,
      );
      return;
    }

    dispatch(
      gainExperience({
        skill: 'mining',
        experienceGained: ore.experienceGiven,
      }),
    );

    // setInventory((prevInventory) => [...prevInventory, ore.drop]);
  };

  return (
    <div>
      {/* <p>Items in inventory: {inventory.length}</p> */}

      <p>Mining level: {miningSkill.level}</p>
      <p>Experience: {miningSkill.experience}</p>
      {/* <p>Exp to next level: {experienceRemaining}</p>
      <p>
        Total exp to reach {miningLevel + 1}: {experienceForNextLevel}
      </p> */}

      {ores.map((ore) => (
        <button key={ore.id} onClick={() => handleMine(ore)}>
          Mine {ore.name}
        </button>
      ))}

      <button onClick={() => totalExperienceForLevel(10)}>
        totalExperienceForLevel
      </button>

      <button onClick={() => levelForTotalExp(1154)}>levelForTotalExp</button>
    </div>
  );
};

export default Mining;
