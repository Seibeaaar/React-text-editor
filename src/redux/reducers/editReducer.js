import { SET_COLOR, SET_FONTSIZE, SET_BACKGROUND } from '../constants';

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

const findCurrentElement = (arr, id) => {
  return arr.indexOf(arr.filter(item => item.id === id)[0]);
}

const editReducer = (state = initialState, action) => {
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
    default :
      return state;
  }
}

export default editReducer;