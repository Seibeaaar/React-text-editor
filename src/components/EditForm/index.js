import React from 'react';
import { connect } from 'react-redux';
import './EditForm.css';
import NumberElement from './NumberElement';
import ColorElement from './ColorElement';
import { setColor, setBackground, setFontsize} from '../../redux/actions';

const EditForm = ({ active, features, setColor, setBackground, setFontsize }) => {
  return (
    // relying on feature renders sufficient input element and passing proper action to it
    <div className="editForm__container">
      { features.map(feature => feature.includes('size') ? <NumberElement active={active} content={feature} action={setFontsize} /> 
      : <ColorElement active={active} content={feature} action={feature.includes('background') ? setBackground : setColor} />)}
    </div> 
  )
}

// getting all features (styles) that can be mutated in application
const mapStateToProps = (state) => {
  return {
    features: state.edit.editableFeatures
  }
}

// getting all actions needed and connecting component with redux passing state (mapped to props) and actions

export default connect(mapStateToProps, { setColor, setBackground, setFontsize })(EditForm);