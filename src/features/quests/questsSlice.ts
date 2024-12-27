import { createSlice } from '@reduxjs/toolkit';

const questsSlice = createSlice({
  name: 'quests',
  initialState: [],
  reducers: {},
});

export const { reducer: questsReducer } = questsSlice;
