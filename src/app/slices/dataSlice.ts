import { createSlice } from '@reduxjs/toolkit';

interface DateState {
  colorTheme: 'light' | 'dark';
}

const initialState: DateState = {
  colorTheme: 'dark',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggleTheme: (_state, action) => ({ colorTheme: action.payload }),
  },
});

export const { toggleTheme } = dataSlice.actions;

export default dataSlice.reducer;
