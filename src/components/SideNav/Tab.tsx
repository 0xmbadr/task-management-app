import { TbLayoutBoardSplit } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/slices/modalSlice';
type TabProps = {
  name?: string;
  addNew?: boolean;
};

const Tab = ({ name, addNew }: TabProps) => {
  // store
  const dispatch = useDispatch();

  if (addNew) {
    return (
      <button
        className="SideNav__tab SideNav__addNew"
        onClick={() => dispatch(openModal({ ModalType: 'AddBoard' }))}>
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
