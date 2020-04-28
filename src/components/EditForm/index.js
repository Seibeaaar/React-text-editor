import React, { useState } from 'react';
import InputColor from 'react-input-color';

const EditForm = () => {
  const [color, setColor] = useState('');
  return (
    <form>
      <InputColor initialValue='#000' onChange={e => setColor(e.target.value)} placement='right' />
    </form> 
  )
}

export default EditForm;