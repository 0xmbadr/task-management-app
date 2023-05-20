import { createSlice, current } from '@reduxjs/toolkit';
import { IBoard } from '../../@types/data';
import { produce } from './../../../node_modules/immer';
interface DateState {
  colorTheme: 'light' | 'dark';
  data: IBoard[];
  currentTab: string;
}

const initialState: DateState = {
  colorTheme: 'light',
  data: [],
  currentTab: '',
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
    setCurrentTab: (state, action) => {
      return { ...state, currentTab: action?.payload || '' };
    },
  },
});

export const { toggleTheme, addBoard, setCurrentTab } = dataSlice.actions;

export default dataSlice.reducer;
