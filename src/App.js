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
    <>
      <div className="app__container">
        { content.map(item => <ContentEditable 
        content={item.text} color={item.color} fontSize={item.fontSize} backgroundColor={item.backgroundColor} active={activeHandler} id={item.id}/>) }
        <EditForm active={active}/>
        
      </div>
      <button onClick={() => toJSON()} className="json__btn">To JSON</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.edit.elements
  }
}

export default connect(mapStateToProps, { toJSON })(App);
