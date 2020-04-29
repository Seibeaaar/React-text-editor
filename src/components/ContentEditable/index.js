import React from 'react';
import './ContentEditable.css';

const ContentEditable = ({ content, color, fontSize, backgroundColor, active, id, changeText }) => {
  return (
    <>
      <span className="editable__text" contentEditable suppressContentEditableWarning={ true } 
      style={{color, fontSize, backgroundColor}} onFocus={() => {
        active(id);
      }}>{content}</span>
    </>
  )
}

export default ContentEditable;