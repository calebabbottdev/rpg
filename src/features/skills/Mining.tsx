import React from 'react';

// Data
import { getItemById, Resource } from 'src/data/items/items';

// Redux
import { AppDispatch, RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { handleExperienceGain } from 'features/skills/skillsThunks';
import { handleAddItemToInventory } from 'features/inventory/inventoryThunk';
import { addMessage } from 'features/textbox/textboxSlice';

// Strings
import { gatheringSkillTooLow } from 'src/constants/strings';

const copper: Resource = {
  id: 'copper_ore',
  name: 'Copper Ore',
  levelRequired: 1,
  experienceGiven: 333804,
  drop: getItemById('copper_ore')!,
};

const tin: Resource = {
  id: 'tin_ore',
  name: 'Tin Ore',
  levelRequired: 1,
  experienceGiven: 5,
  drop: getItemById('tin_ore')!,
};

const iron: Resource = {
  id: 'iron_ore',
  name: 'Iron Ore',
  levelRequired: 15,
  experienceGiven: 20,
  drop: getItemById('iron_ore')!,
};

const ores: Resource[] = [copper, tin, iron];

const Mining: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const miningSkill = useSelector((state: RootState) => state.skills.mining);

  const handleMine = (ore: Resource) => {
    if (miningSkill.level < ore.levelRequired) {
      dispatch(addMessage(gatheringSkillTooLow('mining', ore, 'mine')));
      return;
    }

    dispatch(handleAddItemToInventory(ore.drop, 1));
    dispatch(handleExperienceGain('mining', ore.experienceGiven));
  };

  return (
    <div>
      <p>Mining level: {miningSkill.level}</p>
      <p>Experience: {miningSkill.experience}</p>
      <p>Exp to next level: {miningSkill.remainingExperienceForNextLevel}</p>
      <p>
        Total exp to reach {miningSkill.level + 1}:{' '}
        {miningSkill.totalExperienceForNextLevel}
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
