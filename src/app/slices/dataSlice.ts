import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../@types/data';
import { onAddBoard, onEditBoard } from '../actions/dataSliceActions';
export interface DataState {
  colorTheme: 'light' | 'dark';
  data: IBoard[];
  currentTab: string;
}

const initialState: DataState = {
  colorTheme: 'light',
  data: [],
  currentTab: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggleTheme: (state, action) => ({ ...state, colorTheme: action.payload }),
    addBoard: (state, action) => onAddBoard(state, action),
    editBoard: (state, action) => onEditBoard(state, action),
    setCurrentTab: (state, action) => {
      return { ...state, currentTab: action?.payload || '' };
    },
  },
});

export const { toggleTheme, addBoard, editBoard, setCurrentTab } =
  dataSlice.actions;

export default dataSlice.reducer;
