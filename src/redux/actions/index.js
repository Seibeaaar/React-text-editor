import { SET_COLOR } from '../constants'

export const setColor = (color, id) => {
  return {
    type: SET_COLOR,
    color,
    id
  }
}