import { combineReducers } from 'redux';
// TODO: import your reducers
import {
  stringTimeReducer,
  numberTimeReducer
} from './timeReducers';

export default combineReducers({
  // TODO: export your reducers to combine them
  stringTime: stringTimeReducer,
  numberTime: numberTimeReducer
});
