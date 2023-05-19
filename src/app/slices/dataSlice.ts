import { createSlice, current } from '@reduxjs/toolkit';
import { IBoard } from '../../@types/data';
import { produce } from './../../../node_modules/immer';
interface DateState {
  colorTheme: 'light' | 'dark';
  data: IBoard[];
}

const initialState: DateState = {
  colorTheme: 'light',
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggleTheme: (state, action) => ({ ...state, colorTheme: action.payload }),
    addBoard: (state, action) => {
      const newBoard = action.payload;

      const data = current(state.data);

      const newState = produce(data, (draftState) => {
        draftState.push(newBoard);
      });
      return { ...state, data: newState };
    },
  },
});

export const { toggleTheme, addBoard } = dataSlice.actions;

export default dataSlice.reducer;
