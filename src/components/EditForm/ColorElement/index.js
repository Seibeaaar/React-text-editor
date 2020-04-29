import React, { useState } from 'react';
import InputColor from 'react-input-color';

const ColorElement = ({ active, content, action }) => {
  const [color, editColor] = useState({});
  return (
    <div className="input__container">
      <InputColor initialValue="#000" placement="right" onChange={editColor} />
      <button onClick={() => action(color.hex, active)}>{content}</button>
    </div>
  )
}

export default ColorElement;