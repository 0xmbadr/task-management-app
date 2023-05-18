import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import Tab from './Tab';
import { useState } from 'react';
const SideNav = () => {
  const boards = [{ name: 'Playing Games' }, { name: 'Writing new Stories' }];
  const [toggleOnHide, setToggleOnHide] = useState(false);
  const onHide = toggleOnHide ? 'SideNav__hide' : '';
  return (
    <div className={`SideNav ${onHide}`}>
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
        <button
          className="SideNav__hide-button"
          onClick={() => setToggleOnHide(!toggleOnHide)}>
          <BiHide size={'1.3rem'} />
          <span>Hide Sidebar</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
