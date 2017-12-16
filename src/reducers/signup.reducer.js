import { userConstants } from '../constants';

export function signup(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGNUP_REQUEST:
      return {
        signing: true
      }
    case userConstants.SIGNUP_SUCCESS:
      return {
        success: true,
        user: action.user,
      }
    case userConstants.SIGNUP_FAILURE:
      return {}
    default:
      return state
  }
}
