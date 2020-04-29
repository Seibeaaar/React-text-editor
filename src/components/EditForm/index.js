import React from 'react';
import { connect } from 'react-redux';
import './EditForm.css';
import NumberElement from './NumberElement';
import ColorElement from './ColorElement';
import { setColor, setBackground, setFontsize} from '../../redux/actions';

const EditForm = ({ active, features, setColor, setBackground, setFontsize }) => {
  return (
    <div className="editForm__container">
      { features.map(feature => feature.includes('size') ? <NumberElement active={active} content={feature} action={setFontsize} /> 
      : <ColorElement active={active} content={feature} action={feature.includes('background') ? setBackground : setColor} />)}
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    features: state.edit.editableFeatures
  }
}

export default connect(mapStateToProps, { setColor, setBackground, setFontsize })(EditForm);