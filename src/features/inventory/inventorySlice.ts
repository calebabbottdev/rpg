import { createSlice } from '@reduxjs/toolkit';

// Data
import { Item } from 'data/items/items';

const initialState: Item[] = [];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
});

export const { reducer: inventoryReducer } = inventorySlice;
