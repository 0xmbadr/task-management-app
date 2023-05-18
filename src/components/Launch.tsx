import { useMediaQuery } from 'usehooks-ts';
import Button from './standard/Button';
import { FaChevronDown } from 'react-icons/fa';

const Launch = () => {
  const IsMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="Launch">
      {IsMobile ? (
        <button>
          <span>Board Title</span>
          <span>
            <FaChevronDown />
          </span>
        </button>
      ) : (
        <h1>Board Title</h1>
      )}

      {false && (
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
