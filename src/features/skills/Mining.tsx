import React from 'react';

// Data
import { getItemById, Resource } from 'src/data/items/items';

// Features
import { handleExperienceGain } from 'features/skills/skillsThunks';
import { handleAddItemToInventory } from 'src/features/inventory/inventoryThunks';
import { addMessage } from 'features/textbox/textboxSlice';

// Redux
import { AppDispatch, RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';

// Strings
import { gatheringSkillTooLow } from 'src/constants/gameStrings';
import { Box, Button, Typography } from '@mui/material';

const copper: Resource = {
  id: 'copper_ore',
  name: 'Copper Ore',
  levelRequired: 1,
  experienceGiven: 17.5,
  drop: getItemById('copper_ore')!,
};

const tin: Resource = {
  id: 'tin_ore',
  name: 'Tin Ore',
  levelRequired: 1,
  experienceGiven: 17.5,
  drop: getItemById('tin_ore')!,
};

const iron: Resource = {
  id: 'iron_ore',
  name: 'Iron Ore',
  levelRequired: 15,
  experienceGiven: 35,
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
    <Box>
      <Typography>Mining level: {miningSkill.level}</Typography>
      <Typography>Experience: {miningSkill.experience}</Typography>
      <Typography>
        Exp to next level: {miningSkill.remainingExperienceForNextLevel}
      </Typography>
      <Typography>
        Total exp to reach {miningSkill.level + 1}:{' '}
        {miningSkill.totalExperienceForNextLevel}
      </Typography>

      {ores.map((ore) => (
        <Button
          variant='contained'
          size='small'
          key={ore.id}
          onClick={() => handleMine(ore)}
        >
          Mine {ore.name}
        </Button>
      ))}
    </Box>
  );
};

export default Mining;
