import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import Tab from './Tab';
const SideNav = () => {
  const boards = [{ name: 'Playing Games' }, { name: 'Writing new Stories' }];
  return (
    <div className="SideNav">
      {/* SideNav TOP */}
      <div>
        <div className="SideNav__head">ALL BOARDS (0)</div>

        <div>
          {boards.map((tab, index) => (
            <Tab key={index} name={tab.name} />
          ))}
        </div>
        <Tab addNew />
      </div>

      {/* SideNav Bottom */}
      <div>
        <div className="SideNav__theme-mode">
          <BsFillMoonStarsFill />
          <button className="SideNav__theme-mode-toggle">
            <span
              className="SideNav__theme-mode-toggle-ball"
              style={{ left: '55%' }}></span>
          </button>
          <BsFillSunFill size={'1.3rem'} />
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
