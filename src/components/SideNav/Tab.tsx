import { TbLayoutBoardSplit } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/slices/modalSlice';
import { useAppSelector } from '../../app/hooks';
import { setCurrentTab } from '../../app/slices/dataSlice';
type TabProps = {
  name?: string;
  addNew?: boolean;
  defaultTab?: boolean;
};

const Tab = ({ name, addNew, defaultTab }: TabProps) => {
  // store
  const dispatch = useDispatch();
  const currentTab = useAppSelector((state) => state.data.currentTab);
  const active = currentTab ? currentTab === name : defaultTab;

  // Handlers
  const handleClickTab = (name: string | undefined) => {
    dispatch(setCurrentTab(name));
  };
  if (addNew) {
    return (
      <button
        className="SideNav__tab SideNav__tab--addNew"
        onClick={() => dispatch(openModal({ ModalType: 'AddBoard' }))}>
        <TbLayoutBoardSplit /> + Create A New Board
      </button>
    );
  }
  return (
    <button
      className={`SideNav__tab ${active ? 'SideNav__tab--active' : ''}`}
      onClick={() => handleClickTab(name)}>
      <TbLayoutBoardSplit />
      {name}
    </button>
  );
};

export default Tab;
