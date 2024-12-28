import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import player from 'src/db/player.json';

type SkillProperties = {
  level: number;
  experience: number;
};

type InitialState = {
  [key: string]: SkillProperties;
};

const initialState: InitialState = {
  attack: {
    level: 1,
    experience: 0,
  },
  strength: {
    level: 1,
    experience: 0,
  },
  defense: {
    level: 1,
    experience: 0,
  },
  hitpoints: {
    level: 10,
    experience: 1154,
  },
  mining: {
    level: 1,
    experience: 0,
  },
};

const totalExpForLevel = (level: number): number => {
  let experience = 0;
  for (let i = 1; i < level; i++) {
    experience += Math.floor(i + 300 * Math.pow(2, i / 7));
  }
  return Math.floor(experience / 4);
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    getSkills: () => {
      return { ...player.skills };
    },
    gainExperience: (
      state,
      action: PayloadAction<{ skill: string; experienceGained: number }>,
    ) => {
      const { skill, experienceGained } = action.payload;
      const currentSkill = state[skill];

      if (!currentSkill) return;

      currentSkill.experience += experienceGained;

      while (
        currentSkill.level < 99 &&
        currentSkill.experience >= totalExpForLevel(currentSkill.level + 1)
      ) {
        currentSkill.level += 1;
        console.log(
          `Congratulations! Your ${skill} level is now level ${currentSkill.level}.`,
        );
      }
    },
  },
});

export const { getSkills, gainExperience } = skillsSlice.actions;
export default skillsSlice.reducer;
