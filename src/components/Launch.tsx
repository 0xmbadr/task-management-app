import { useMediaQuery } from 'usehooks-ts';
import Button from './standard/Button';
import { FaChevronDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { openModal } from '../app/slices/modalSlice';

const Launch = () => {
  const currentBoard = useAppSelector((state) => state.data.currentTab);
  const boards = useAppSelector((state) => state.data.data);
  const IsMobile = useMediaQuery('(max-width: 768px)');
  const dispatch = useAppDispatch();

  // variables
  const hasBoard = boards ? boards.length > 0 : false;

  return (
    <div className="Launch">
      {IsMobile ? (
        <button>
          <span>{currentBoard ? currentBoard : 'No Board Found'}</span>
          <span>
            <FaChevronDown />
          </span>
        </button>
      ) : (
        <h1>{currentBoard ? currentBoard : 'No Board Found'}</h1>
      )}

      {hasBoard && (
        <Button
          onClick={() => dispatch(openModal({ ModalType: 'AddNewTask' }))}>
          &nbsp; + Add New task &nbsp;
        </Button>
      )}
    </div>
  );
};

export default Launch;
