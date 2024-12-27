import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
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
      experience: 0,
    },
    mining: {
      level: 1,
      experience: 0,
    },
  },
  reducers: {},
});

export const { reducer: skillsReducer } = skillsSlice;
