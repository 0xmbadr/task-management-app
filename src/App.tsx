import Header from './layout/Header';

function App() {
  const colorTheme = 'light';

  return (
    <div className={`App ${colorTheme}`}>
      <Header colorTheme={colorTheme} />
    </div>
  );
}

export default App;
