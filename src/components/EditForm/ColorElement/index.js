import React, { useState } from 'react';
import InputColor from 'react-input-color';

const ColorElement = ({ content }) => {
  const [color, editColor] = useState({});
  return (
    <div className="input__container">
      <InputColor initialValue="#000" placement="right" onChange={editColor} />
      <button>{content}</button>
    </div>
  )
}

export default ColorElement;