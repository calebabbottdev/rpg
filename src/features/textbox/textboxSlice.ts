import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextboxState = {
  messages: string[];
};

const initialState: TextboxState = {
  messages: [],
};

const textboxSlice = createSlice({
  name: 'textbox',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
      // Keep only the last 5 messages
      // if (state.messages.length > 5) {
      //   state.messages.shift();
      // }
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = textboxSlice.actions;
export default textboxSlice.reducer;
