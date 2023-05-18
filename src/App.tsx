import { useAppSelector } from './app/hooks';
import Body from './layout/Body';
import Header from './layout/Header';

function App() {
  const colorTheme = useAppSelector((state) => state.data.colorTheme);

  return (
    <div className={`App ${colorTheme}`}>
      <Header colorTheme={colorTheme} />
      <Body />
    </div>
  );
}

export default App;
