import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Data
import { Item } from 'data/items/items';

const initialState: { item: Item; quantity: number }[] = [];

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    addToBank: (
      state,
      action: PayloadAction<{ item: Item; quantity: number }>
    ): void => {
      const { item, quantity } = action.payload;
      const existingItem = state.find((entry) => entry.item.id === item.id);

      if (existingItem) existingItem.quantity += quantity;
      else state.push({ item, quantity });
    },
    removeFromBank: (
      state,
      action: PayloadAction<{ item: Item; quantity: number; index: number }>
    ): void => {
      const { item, quantity, index } = action.payload;
      const existingItem = state[index];

      if (existingItem && existingItem.item.id === item.id) {
        existingItem.quantity -= quantity;

        if (existingItem.quantity <= 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addToBank, removeFromBank } = bankSlice.actions;
export const { reducer: bankReducer } = bankSlice;
