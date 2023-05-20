import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IModal {
  ModalType: string;
  ModalDetail?: Record<string, never> | any;
}

const initialState: IModal = {
  ModalType: '',
  ModalDetail: {},
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      return { ...state, ...action.payload };
    },
    closeModal: (state) => {
      return { ...state, ModalType: '' };
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
