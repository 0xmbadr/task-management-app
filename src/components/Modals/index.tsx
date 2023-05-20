import { useAppSelector } from '../../app/hooks';
import AddBoard from './AddBoard';
import AddNewTask from './AddNewTask';
import EditBoard from './EditBoard';

const Modals = () => {
  const modalType = useAppSelector((state) => state.modal.ModalType);
  return (
    <>
      {modalType === 'AddBoard' && <AddBoard />}
      {modalType === 'EditBoard' && <EditBoard />}

      {modalType === 'AddNewTask' && <AddNewTask />}
    </>
  );
};

export default Modals;
