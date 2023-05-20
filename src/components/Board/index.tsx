import { useMediaQuery } from 'usehooks-ts';
import Button from '../standard/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/slices/modalSlice';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';

type BoardProps = {
  hideSideNav: boolean;
  // currentTab: string;
  // boards: IBoard[];
};

const Board = ({ hideSideNav }: BoardProps) => {
  const dispatch = useDispatch();
  const boards = useAppSelector((state) => state.data.data);
  const currentTab = useAppSelector((state) => state.data.currentTab);

  const IsMobile = useMediaQuery('(max-width: 767px)');
  const onHide = hideSideNav || IsMobile ? 'Board__full' : '';

  const [data, setData] = useState(boards);

  useEffect(() => {
    setData(boards);
  }, [boards]);

  if (data.length === 0) {
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
  }

  return <div className={`Board ${onHide}`}>{currentTab}</div>;
};
export default Board;
