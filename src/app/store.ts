import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { bankReducer } from 'features/bank/bankSlice';
import { equipmentReducer } from 'src/features/wornEquipment/equipmentSlice';
import inventoryReducer from 'features/inventory/inventorySlice';
import locationReducer from 'features/location/locationSlice';
import { questsReducer } from 'features/quests/questsSlice';
import skillsReducer from 'features/skills/skillsSlice';
import textboxReducer from 'features/textbox/textboxSlice';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    equipment: equipmentReducer,
    inventory: inventoryReducer,
    location: locationReducer,
    quests: questsReducer,
    skills: skillsReducer,
    textbox: textboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
