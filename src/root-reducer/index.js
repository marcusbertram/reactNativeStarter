import {
  combineReducers,
} from 'redux';
import {
  REDUCER_NAME as NAV_REDUCER, navReducer
} from '../nav/index';
import {
  REDUCER_NAME as AUTH_REDUCER, authReducer
} from '../login-screen/reducer';

export default combineReducers({
  [NAV_REDUCER]: navReducer,
  [AUTH_REDUCER]: authReducer
})
