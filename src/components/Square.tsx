import React, { useState } from "react";

interface SquareProps{
  onDoubleClick: () => void;
}

const Square: React.FC<SquareProps> = ({onDoubleClick}) => {
  const [color, setColor] = useState<'blue' | 'red'>('blue');
  const toggleColor = () => {
    setColor(currentColor => currentColor === 'blue' ? 'red' : 'blue');
  }

  return (
    <div
      onClick={toggleColor}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
      }}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        border: '1px solid black'
      }}
    />
  );
}

export default Square;