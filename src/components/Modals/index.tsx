import { useAppSelector } from '../../app/hooks';
import AddBoard from './AddBoard';
import EditBoard from './EditBoard';

const Modals = () => {
  const modelType = useAppSelector((state) => state.modal.ModalType);
  return (
    <>
      {modelType === 'AddBoard' && <AddBoard />}
      {modelType === 'EditBoard' && <EditBoard />}
    </>
  );
};

export default Modals;
