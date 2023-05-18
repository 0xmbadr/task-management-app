import { BsEyeFill } from 'react-icons/bs';
import Board from '../components/Board';
import SideNav from '../components/SideNav';
import { useState } from 'react';

type BodyProps = {
  handleThemeChange: () => void;
};

const Body = ({ handleThemeChange }: BodyProps) => {
  const [hideSideNav, setHideSideNav] = useState<boolean>(false);

  const ToggleOnHide = () => {
    setHideSideNav((prev) => !prev);
  };
  return (
    <div className="Body">
      <SideNav
        handleThemeChange={handleThemeChange}
        hideSideNav={hideSideNav}
        ToggleOnHide={ToggleOnHide}
      />
      <Board hideSideNav={hideSideNav} />

      {hideSideNav && (
        <button onClick={ToggleOnHide} className="Body__SideNav__show-button">
          <BsEyeFill />
        </button>
      )}
    </div>
  );
};

export default Body;
