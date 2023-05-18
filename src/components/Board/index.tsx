type BoardProps = {
  hideSideNav: boolean;
};

const Board = ({ hideSideNav }: BoardProps) => {
  const onHide = hideSideNav ? 'Board__full' : '';
  return <div className={`Board ${onHide}`}>Board Section lies here!</div>;
};
export default Board;
