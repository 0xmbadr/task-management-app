import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../@types/data';
import {
  onAddBoard,
  onAddTask,
  onEditBoard,
  onSetBoardStatus,
} from '../actions/dataSliceActions';
export interface DataState {
  colorTheme: 'light' | 'dark';
  data: IBoard[];
  currentTab: string;
  currentTabStatus: string[] | any;
}

const initialState: DataState = {
  colorTheme: 'light',
  data: [],
  currentTab: '',
  currentTabStatus: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggleTheme: (state, action) => ({ ...state, colorTheme: action.payload }),
    setBoardStatus: (state, action) => onSetBoardStatus(state, action),
    setCurrentTab: (state, action) => {
      return { ...state, currentTab: action?.payload || '' };
    },
    // Board
    addBoard: (state, action) => onAddBoard(state, action),
    editBoard: (state, action) => onEditBoard(state, action),
    // Task
    addTask: (state, action) => onAddTask(state, action),
  },
});

export const {
  toggleTheme,
  addBoard,
  editBoard,
  addTask,
  setCurrentTab,
  setBoardStatus,
} = dataSlice.actions;

export default dataSlice.reducer;
