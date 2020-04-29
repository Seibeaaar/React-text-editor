import React from 'react';
import './ContentEditable.css';

const ContentEditable = ({ content, color, fontSize, backgroundColor, active, id, changeText }) => {
  return (
    <>
      {/* getting styles, id and active as a callback from App component */}
      {/* Setting inline styles for span element, setting suppress contenteditable warning to true to avoid warnings from React  */}
      <span className="editable__text" contentEditable suppressContentEditableWarning={ true } 
      style={{color, fontSize, backgroundColor}} onFocus={() => {
        active(id);
      }}>{content}</span>
    </>
  )
}

export default ContentEditable;