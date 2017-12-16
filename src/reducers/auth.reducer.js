import { userConstants } from '../constants';

const user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        logining: true,
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        success: true,
        loggedIn: true,
        user: action.user
      }
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}
