import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Data
import { Item } from 'data/items/items';

const initialState: { item: Item; quantity: number }[] = [];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addToInventory: (
      state,
      action: PayloadAction<{ item: Item; quantity: number }>,
    ) => {
      const { item, quantity } = action.payload;
      const existingItem = state.find((entry) => entry.item.id === item.id);

      if (item.isStackable) {
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.push({ item, quantity });
        }
      } else {
        for (let i = 0; i < quantity; i++) {
          state.push({ item, quantity: 1 });
        }
      }
    },
  },
});

export const { addToInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
