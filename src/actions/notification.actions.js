import { notificationConstant } from '../constants';
import { loaderActions }  from './loader.actions'

export const notificationActions = {
    send,
    clear,
};

function send(iconName, title, contentText, delay) {
    return dispatch => {
      dispatch(loaderActions.load())
      setTimeout(() => {
        dispatch(loaderActions.clear())
        dispatch(send({iconName, title, contentText}))
      }, delay)
    }
    function send(props) { return { type: notificationConstant.SEND, ...props}}
}

function clear() {
  return dispatch => {
    dispatch(clear())
  }
  function clear() {return {type: notificationConstant.CLEAR}}
}
