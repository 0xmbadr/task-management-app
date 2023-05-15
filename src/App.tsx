import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggleTheme } from './app/slices/dataSlice';
import Header from './layout/Header';

function App() {
  const colorTheme = useAppSelector((state) => state.data.colorTheme);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    colorTheme === 'dark'
      ? dispatch(toggleTheme('light'))
      : dispatch(toggleTheme('dark'));
  };

  return (
    <div className={`App ${colorTheme}`}>
      <Header colorTheme={colorTheme} />
      <button onClick={handleToggleTheme}>toggleTheme</button>
    </div>
  );
}

export default App;
