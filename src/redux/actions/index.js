import { SET_COLOR, SET_FONTSIZE,SET_BACKGROUND, TO_JSON } from '../constants'

export const setColor = (color, id) => {
  return {
    type: SET_COLOR,
    color,
    id
  }
}

export const setFontsize = (size, id) => {
  return {
    type: SET_FONTSIZE,
    size,
    id
  }
}

export const setBackground = (color, id) => {
  return {
    type: SET_BACKGROUND,
    color,
    id
  }
}

export const toJSON = () => {
  return {
    type: TO_JSON
  }
}

