import { useMediaQuery } from 'usehooks-ts';
import Button from './standard/Button';
import { FaChevronDown } from 'react-icons/fa';
import { useAppSelector } from '../app/hooks';

const Launch = () => {
  const currentBoard = useAppSelector((state) => state.data.currentTab);
  const IsMobile = useMediaQuery('(max-width: 768px)');
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

      {currentBoard && (
        <Button
          onClick={() => {
            console.log('clicked');
          }}>
          &nbsp; + Add New task &nbsp;
        </Button>
      )}
    </div>
  );
};

export default Launch;
