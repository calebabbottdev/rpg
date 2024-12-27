import { createSlice } from '@reduxjs/toolkit';

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState: {
    mainHand: null,
    offhand: null,
    head: null,
    chest: null,
    legs: null,
    neck: null,
    gloves: null,
    boots: null,
    ring: null,
    ammunition: null,
  },
  reducers: {},
});

export const { reducer: equipmentReducer } = equipmentSlice;
