import React, { useState } from 'react';
import InputColor from 'react-input-color';
import { connect } from 'react-redux';
import { setColor } from '../../redux/actions'

const EditForm = ({ active, setColor }) => {
  const [color, editColor] = useState({});
  return (
    <form>
      <InputColor initialValue='#000' onChange={editColor} placement='right' />
      <button onClick={(e) => {
        e.preventDefault();
        setColor(color.hex, active);
      }}>Set Color</button>
    </form> 
  )
}

export default connect(null, { setColor })(EditForm);