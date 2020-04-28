import { SET_COLOR } from '../constants';

const initialState = [
  { 
    text: 'Hello world',
    color: '#000',
    fontSize: 12,
    backgroundColor: '#fff',
    id: '231342221'
  }, 
  {
    text: 'React',
    color: 'red',
    fontSize: 14,
    backgroundColor: '#f3f3f3',
    id: '214245353'
  }
]

const findCurrentElement = (arr, id) => {
  return arr.indexOf(arr.filter(item => item.id === id)[0]);
}

const editReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_COLOR: 
      state(findCurrentElement(state, action.id)).color = action.color;
      return state;
    default :
      return state;
  }
}

export default editReducer;