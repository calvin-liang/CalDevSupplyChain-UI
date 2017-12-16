import { notificationConstant } from '../constants';

export function notification(state = {}, action) {
  switch (action.type) {
    case notificationConstant.SEND:
      return {
        send: true,
        iconName: action.iconName,
        title: action.title,
        contentText: action.contentText
      }
    case notificationConstant.CLEAR:
      return {}
    default:
      return state
  }
}
