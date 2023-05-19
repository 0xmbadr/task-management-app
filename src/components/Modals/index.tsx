import { useAppSelector } from '../../app/hooks';
import AddBoard from './AddBoard';

const Modals = () => {
  const modelType = useAppSelector((state) => state.modal.ModalType);
  return <>{modelType === 'AddBoard' && <AddBoard />}</>;
};

export default Modals;
