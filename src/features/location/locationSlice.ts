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
    getLocation: (): LocationState => {
      return initialState;
    },
    changeLocation: (state, action: PayloadAction<Location>): void => {
      state.location = action.payload;
    },
  },
});

export const { getLocation, changeLocation } = locationSlice.actions;
export default locationSlice.reducer;
