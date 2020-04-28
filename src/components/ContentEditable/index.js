import React from 'react';

const ContentEditable = ({ content }) => {
  return (
    <>
      <span contentEditable suppressContentEditableWarning={ true }>{content}</span>
      <br />
    </>
  )
}

export default ContentEditable;