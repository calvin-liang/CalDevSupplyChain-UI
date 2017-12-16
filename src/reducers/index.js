import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { signup } from './signup.reducer';
import { authentication } from './auth.reducer';
import { notification } from './notification.reducer';
import { loader } from './loader.reducer';

const appReducer = combineReducers({
  alert,
  loader,
  notification,
  signup,
  authentication,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
     state = {}
  }
  return appReducer(state, action)
}

export default rootReducer;
