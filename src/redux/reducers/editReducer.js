import { SET_COLOR, SET_FONTSIZE, SET_BACKGROUND, TO_JSON } from '../constants';

// setting initial value of state to pass it in a reducer as a default value
const initialState = {
  elements: [{ 
    text: 'Hello world',
    color: '#000',
    fontSize: 20,
    backgroundColor: '#fff',
    id: '231342221'
  }, 
  {
    text: 'React',
    color: 'red',
    fontSize: 24,
    backgroundColor: '#f3f3f3',
    id: '214245353'
  }],
  editableFeatures: ['color', 'background color', 'font size']
}

// function to easily find the index of element in edit
const findCurrentElement = (arr, id) => {
  return arr.indexOf(arr.filter(item => item.id === id)[0]);
}

const editReducer = (state = initialState, action) => {
  // making a copy of elements from state to avoid direct mutation of state
  const elements = [...state.elements];
  switch(action.type) {
    case SET_COLOR: 
      elements[findCurrentElement(state.elements, action.id)].color = action.color;
      return {...state, elements};
    case SET_FONTSIZE:
      elements[findCurrentElement(state.elements, action.id)].fontSize = action.size;
      return {...state, elements};
    case SET_BACKGROUND:
      elements[findCurrentElement(state.elements, action.id)].backgroundColor = action.color;
      return {...state, elements};
    case TO_JSON:
      console.log(JSON.stringify(elements.map(element => {
        delete element.id;
        return element;
      })));
      return state;
    default :
      return state;
  }
}

export default editReducer;
