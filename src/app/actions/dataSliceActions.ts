import { AnyAction, current } from '@reduxjs/toolkit';
import produce from 'immer';
import { IColumn, ITask } from '../../@types/data';
import { DataState } from '../slices/dataSlice';

export const onAddBoard = (state: DataState, action: AnyAction) => {
  const newBoard = action.payload;

  const data = current(state.data);

  const newState = produce(data, (draftState: any) => {
    draftState.push(newBoard);
  });
  return { ...state, data: newState };
};

export const onEditBoard = (state: DataState, action: AnyAction) => {
  const { currentBoard, newBoard } = action.payload;

  const data = current(state.data);

  const exist = data.find((item) => item.name === currentBoard);

  if (exist) {
    const targetBoardIndex = data.findIndex(
      (item) => item.name === currentBoard,
    );

    const newState = produce(data, (draftState: any) => {
      const boardWithTaskStatusChanged = {
        ...newBoard,
        columns: newBoard.columns.map((i: IColumn) => {
          return {
            ...i,
            tasks: i?.tasks?.map((task: ITask) => {
              return {
                ...task,
                status: i.name,
              };
            }),
          };
        }),
      };
      draftState[targetBoardIndex] = boardWithTaskStatusChanged;
    });
    return { ...state, data: newState };
  } else throw console.error('onEdit board Error');
};

export const onAddTask = (state: DataState, action: AnyAction) => {
  const { currentBoard, newTask } = action.payload;

  const data = current(state.data);
  const exist = data.find((item) => item.name === currentBoard);

  if (exist) {
    const targetBoardIndex = data.findIndex(
      (item) => item.name === currentBoard,
    );
    const targetColumnIndex = exist.columns!.findIndex(
      (item) => item.name == newTask.status,
    );

    const newState = produce(data, (draftState: any) => {
      draftState[targetBoardIndex].columns[targetColumnIndex].tasks.push(
        newTask,
      );
    });
    return { ...state, data: newState };
  } else throw console.error('addTask error');
};
