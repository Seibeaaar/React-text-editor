import React, { useState } from 'react';
import { connect } from 'react-redux';
import ContentEditable from './components/ContentEditable';
import EditForm from './components/EditForm';
import './App.css';

const App = ({ content }) => {
  const [active, setActive] = useState('');
  const activeHandler = (id) => {
    setActive(id);
  }
  return (
    <div className="App">
      { content.map(item => <ContentEditable 
      content={item.text} color={item.color} fontSize={item.fontSize} backgroundColor={item.backgroundColor} active={activeHandler} id={item.id}/>) }
      <EditForm active={active}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.edit.elements
  }
}

export default connect(mapStateToProps, null)(App);
