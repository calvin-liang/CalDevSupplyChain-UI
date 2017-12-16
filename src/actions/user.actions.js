import { userConstants } from '../constants';
import { history, authUtil } from '../util';
import * as AccountAPI from '../api/AccountAPI'
import {alertActions}  from './alert.actions'
import { loaderActions }  from './loader.actions'
import {notificationActions}  from './notification.actions'
import { VerifiedUser } from 'material-ui-icons';

export const userActions = {
  signup,
  login,
  logout,
}

function signup(user) {

  return dispatch => {

    dispatch(request())

    AccountAPI.signup(user)
      .then(res => {
        dispatch(success(res.data))
        dispatch(notificationActions.send('', 'Activation Email Link Sent', 'Please check your email.', 3000))
      })
      .catch(error => {
        if(error.response && error.response.data){
          dispatch(failure())
          dispatch(alertActions.error(error.response.data.errors))
          setTimeout(() => {
            dispatch(alertActions.clear())
          }, 2000)
        }
      })
  }

  function request() { return { type: userConstants.SIGNUP_REQUEST }}
  function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user }}
  function failure() { return { type: userConstants.SIGNUP_FAILURE}}
}

function login(emailAddress, password) {
    return dispatch => {

        dispatch(request())

        AccountAPI.login({emailAddress, password})
            .then(res => {
                  if(res.data && res.headers.authorization) {
                    let user = res.data
                    let jwtToken = authUtil.parseAuthJwtHeaderContent(res.headers.authorization)
                    user["jwtToken"] = jwtToken
                    localStorage.setItem('user', JSON.stringify(user))
                    authUtil.setAuthorizationJwtHeader()
                    dispatch(success(user))
                    dispatch(notificationActions.send('verifiedUserIcon', 'Successfully Login', '', 3000))
                    setTimeout(() => {
                      history.push('/dashboard')
                    }, 3000)
                  }
            })
            .catch(error => {
              if(error.response && error.response.data){
                dispatch(failure())
                dispatch(alertActions.error(error.response.data.errors))
                setTimeout(() => {
                  dispatch(alertActions.clear())
                }, 2000)
              }
            })
    };

    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function successReset(user) { return { type: userConstants.RESET_LOGIN_SUCCESS, user } }
    function failure() { return { type: userConstants.LOGIN_FAILURE } }
}

function logout() {
  return dispatch => {
    // remove user + any carrying properties (jwtToken etc.) from local storage when logout
    localStorage.removeItem('user');
    // refresh all state
    dispatch(refreshStateWhenLogout())
  }
  function refreshStateWhenLogout() { return { type: userConstants.LOGOUT } }
}
