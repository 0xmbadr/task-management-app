import Board from '../components/Board';
import SideNav from '../components/SideNav';

type BodyProps = {
  handleThemeChange: () => void;
};

const Body = ({ handleThemeChange }: BodyProps) => {
  return (
    <div className="Body">
      <SideNav handleThemeChange={handleThemeChange} />
      <Board />
    </div>
  );
};

export default Body;
