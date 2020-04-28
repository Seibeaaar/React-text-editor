import React, { useState } from 'react';
import { connect } from 'react-redux';
import './EditForm.css';
import NumberElement from './NumberElement';
import ColorElement from './ColorElement';

const EditForm = ({ active, features }) => {
  return (
    <div className="editForm__container">
      { features.map(feature => feature.includes('Size') ? <NumberElement content={feature} /> : <ColorElement content={feature} />)}
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    features: state.edit.editableFeatures
  }
}

export default connect(mapStateToProps, null)(EditForm);