import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
const SideNav = () => {
  const boards = [{ name: 'Playing Games' }, { name: 'Writing new Stories' }];
  return (
    <div className="SideNav">
      {/* SideNav TOP */}
      <div>
        <div className="SideNav__head">ALL BOARDS 0</div>

        <div>{boards.map((tab, index) => tab.name)}</div>
      </div>

      <button>Create a new Board</button>

      {/* SideNav Bottom */}
      <div>
        <div className="SideNav__theme-mode">
          <BsFillSunFill />
          <button className="SideNav__theme-toggle">
            <span className="SideNav__theme-toggle-ball"></span>
          </button>
          <BsFillMoonStarsFill />
        </div>
        <div className="SideNav__hide-button">
          <BiHide />
          Hide Sidebar
        </div>
      </div>
    </div>
  );
};

export default SideNav;
