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
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      state.messages.push(`[${hours}:${minutes}:${seconds}] ${action.payload}`);
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
