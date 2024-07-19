/**
 * Create a 3x3 set of 9 squares in a square formation. 
 * All of these squares should be blue. 
 * Clicking on any individual square should change the color of that individual square to red. 
 * Double click on any of the squares should change all of them to blue.
 */

import React, { useCallback, useState } from 'react';
import Square from './components/Square';

const App: React.FC = () => {
  const [key, setKey] = useState(0);
  const resetColors = useCallback(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return(
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 50px)"}}>
      {Array.from({length: 9}).map((_, index) => (
        <Square key={`${key}-${index}`} onDoubleClick={resetColors}/>
      ))}
    </div>
  )
}

export default App;