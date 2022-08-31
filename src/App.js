import { useState } from 'react';
import Color from './Color';

import './App.css';

function App() {

  const [UIcolor, setUIColor] = useState(null)

  const getColor = (color) => {
    setUIColor(color)
  }

  return (
  <div className='app'>
    <div 
      className='box-content' 
      style={{background: `${UIcolor}`}}
    
    >
    </div>

  <Color getColor={getColor} />

  </div>
  );
}

export default App;
