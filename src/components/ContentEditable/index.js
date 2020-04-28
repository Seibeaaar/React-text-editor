import React from 'react';

const ContentEditable = ({ content, color, fontSize, backgroundColor, active, id }) => {
  return (
    <>
      <span contentEditable suppressContentEditableWarning={ true } 
      style={{color, fontSize, backgroundColor}} onFocus={() => {
        active(id);
      }}>{content}</span>
      <br />
    </>
  )
}

export default ContentEditable;