import React, { useState } from 'react';

const NumberElement = ({active, content, action}) => {
  const [size, editSize] = useState(10);
  return (
    <div className="input__container">
      <input type="number" onChange={(e) => {
        editSize(e.target.value);
      }} defaultValue={size} min="10" max="100" />
      <button onClick={() => action(parseInt(size), active)}>{content}</button> 
    </div>
  )
}

export default NumberElement;