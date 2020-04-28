import React, { useState } from 'react';
import { connect } from 'react-redux';
import ContentEditable from './components/ContentEditable';
import EditForm from './components/EditForm';

const App = ({ content }) => {
  const [active, setActive] = useState('');
  const activeHandler = (id) => {
    setActive(id);
  }
  return (
    <>
      { content.map(item => <ContentEditable 
      content={item.text} color={item.color} fontSize={item.fontSize} backgroundColor={item.backgroundColor} active={activeHandler} id={item.id}/>) }
      <EditForm active={active}/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.edit
  }
}

export default connect(mapStateToProps, null)(App);
