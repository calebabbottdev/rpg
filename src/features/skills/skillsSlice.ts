import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import player from 'src/db/player.json';

type SkillProperties = {
  level: number;
  experience: number;
  remainingExperienceForNextLevel: number;
  totalExperienceForNextLevel: number;
};

type InitialState = {
  [key: string]: SkillProperties;
};

const totalExperienceForLevel = (level: number): number => {
  let experience = 0;
  for (let i = 1; i < level; i++) {
    experience += Math.floor(i + 300 * Math.pow(2, i / 7));
  }
  return Math.floor(experience / 4);
};

const initialState: InitialState = Object.keys(player.skills).reduce(
  (acc, skill) => {
    const level: number = (
      player.skills[skill as keyof typeof player.skills] as SkillProperties
    ).level;

    const experience: number = (
      player.skills[skill as keyof typeof player.skills] as SkillProperties
    ).experience;

    const totalExperienceForNextLevel = totalExperienceForLevel(level + 1);

    acc[skill] = {
      level,
      experience,
      remainingExperienceForNextLevel: totalExperienceForNextLevel - experience,
      totalExperienceForNextLevel: totalExperienceForNextLevel,
    };
    return acc;
  },
  {} as InitialState,
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    getSkills: (): InitialState => {
      return initialState;
    },
    gainExperience: (
      state,
      action: PayloadAction<{
        skill: string;
        experienceGained: number;
      }>,
    ): void => {
      const { skill, experienceGained } = action.payload;
      const currentSkill = state[skill];

      if (!currentSkill) return;

      currentSkill.experience += experienceGained;

      while (
        currentSkill.level < 99 &&
        currentSkill.experience >=
          totalExperienceForLevel(currentSkill.level + 1)
      ) {
        currentSkill.level += 1;
      }

      if (currentSkill.level < 99) {
        currentSkill.remainingExperienceForNextLevel =
          totalExperienceForLevel(currentSkill.level + 1) -
          currentSkill.experience;

        currentSkill.totalExperienceForNextLevel = totalExperienceForLevel(
          currentSkill.level + 1,
        );
      } else {
        currentSkill.remainingExperienceForNextLevel = 0;
        currentSkill.totalExperienceForNextLevel = 0;
      }
    },
  },
});

export const { getSkills, gainExperience } = skillsSlice.actions;
export default skillsSlice.reducer;
