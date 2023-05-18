import Button from '../standard/Button';

type BoardProps = {
  hideSideNav: boolean;
};

const Board = ({ hideSideNav }: BoardProps) => {
  const onHide = hideSideNav ? 'Board__full' : '';
  return (
    <div className={`Board ${onHide} Board__empty`}>
      <p className="Board__empty-txt">
        This board is empty. Create a new column to get started.
      </p>
      <div className="Board__empty-btn">
        <Button>&nbsp; + Create New Board &nbsp;</Button>
      </div>
    </div>
  );
};
export default Board;
