import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { bankReducer } from 'features/bank/bankSlice';
import { inventoryReducer } from 'features/inventory/inventorySlice';
import { questsReducer } from 'features/quests/questsSlice';
import skillsReducer from 'features/skills/skillsSlice';
import { equipmentReducer } from 'features/worn-equipment/equipmentSlice';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    inventory: inventoryReducer,
    quests: questsReducer,
    skills: skillsReducer,
    equipment: equipmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
