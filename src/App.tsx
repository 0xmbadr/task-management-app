import { useState } from 'react';

function App() {
  const [colorTheme, setColorTheme] = useState('light');
  const handleClick = () => {
    if (colorTheme == 'light') {
      setColorTheme('dark');
    } else {
      setColorTheme('light');
    }
  };

  return (
    <div className={`App ${colorTheme}`}>
      <button onClick={() => handleClick()}>Toggle Theme</button>
    </div>
  );
}

export default App;
