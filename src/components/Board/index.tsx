import { useMediaQuery } from 'usehooks-ts';
import Button from '../standard/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/slices/modalSlice';

type BoardProps = {
  hideSideNav: boolean;
};

const Board = ({ hideSideNav }: BoardProps) => {
  const dispatch = useDispatch();

  const IsMobile = useMediaQuery('(max-width: 767px)');
  const onHide = hideSideNav || IsMobile ? 'Board__full' : '';
  return (
    <div className={`Board ${onHide} Board__empty`}>
      <p className="Board__empty-txt">
        This board is empty. Create a new column to get started.
      </p>
      <div
        className="Board__empty-btn"
        onClick={() => dispatch(openModal({ ModalType: 'AddBoard' }))}>
        <Button>&nbsp; + Create New Board &nbsp;</Button>
      </div>
    </div>
  );
};
export default Board;
