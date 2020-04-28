import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentEditable from './components/ContentEditable';
import EditForm from './components/EditForm';

const App = ({ content }) => {
  return (
    <>
      { content.map(item => <ContentEditable content={item.text} />) }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    content: state.edit
  }
}

export default connect(mapStateToProps, null)(App);
