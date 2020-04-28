import { SET_COLOR } from '../constants'

export const setColor = (color) => {
  return {
    type: SET_COLOR,
    color
  }
}