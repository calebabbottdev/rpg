import { createSlice } from '@reduxjs/toolkit';

// Data
import { Item } from 'data/items/items';

const initialState: Item[] = [];

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {},
});

export const { reducer: bankReducer } = bankSlice;
