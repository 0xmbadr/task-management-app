import { TbLayoutBoardSplit } from 'react-icons/tb';
type TabProps = {
  name?: string;
  addNew?: boolean;
};

const Tab = ({ name, addNew }: TabProps) => {
  if (addNew) {
    return (
      <button className="SideNav__tab SideNav__addNew">
        <TbLayoutBoardSplit /> + Create A New Board
      </button>
    );
  }
  return (
    <button className="SideNav__tab ">
      {' '}
      <TbLayoutBoardSplit />
      {name}
    </button>
  );
};

export default Tab;
