import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggleTheme } from './app/slices/dataSlice';
import Body from './layout/Body';
import Header from './layout/Header';

function App() {
  const colorTheme = useAppSelector((state) => state.data.colorTheme);
  const dispatch = useAppDispatch();

  const handleColorTheme = () => {
    return colorTheme === 'dark'
      ? dispatch(toggleTheme('light'))
      : dispatch(toggleTheme('dark'));
  };

  return (
    <div className={`App ${colorTheme}`}>
      <Header colorTheme={colorTheme} />
      <Body handleThemeChange={handleColorTheme} />
    </div>
  );
}

export default App;
