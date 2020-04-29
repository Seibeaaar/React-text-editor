import { SET_COLOR, SET_FONTSIZE,SET_BACKGROUND, TO_JSON } from '../constants'

// passes color and id of element
export const setColor = (color, id) => {
  return {
    type: SET_COLOR,
    color,
    id
  }
}

// passes font size and id of element
export const setFontsize = (size, id) => {
  return {
    type: SET_FONTSIZE,
    size,
    id
  }
}

// passes background color and id of element
export const setBackground = (color, id) => {
  return {
    type: SET_BACKGROUND,
    color,
    id
  }
}

// invokes reducer to put information about elements and their styles in console
export const toJSON = () => {
  return {
    type: TO_JSON
  }
}

