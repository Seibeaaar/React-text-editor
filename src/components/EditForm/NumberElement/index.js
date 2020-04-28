import React, { useState } from 'react';
import InputNumber from 'react-input-number';

const NumberElement = ({content}) => {
  const [size, editSize] = useState(10);
  return (
    <div className="input__container">
      <InputNumber min={10} max={100} value={size} onChange={editSize}/>
      <button>{content}</button> 
    </div>
  )
}

export default NumberElement;