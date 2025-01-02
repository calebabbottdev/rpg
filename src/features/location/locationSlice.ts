import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Location = 'Town' | 'Field';

type LocationState = {
  location: Location;
};

const initialState: LocationState = {
  location: 'Town',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;
export default locationSlice.reducer;
