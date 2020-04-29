import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toJSON } from './redux/actions';
import ContentEditable from './components/ContentEditable';
import EditForm from './components/EditForm';
import './App.css';

const App = ({ content, toJSON }) => {
  const [active, setActive] = useState('');
  const activeHandler = (id) => {
    setActive(id);
  }
  return (
    <div className="App">
      { content.map(item => <ContentEditable 
      content={item.text} color={item.color} fontSize={item.fontSize} backgroundColor={item.backgroundColor} active={activeHandler} id={item.id}/>) }
      <EditForm active={active}/>
      <button onClick={() => toJSON()}>To JSON</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.edit.elements
  }
}

export default connect(mapStateToProps, { toJSON })(App);
