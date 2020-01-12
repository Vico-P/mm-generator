import { combineReducers } from 'redux';
import user from './Modules/user';
import items from './Modules/items';

export default combineReducers({
  user,
  items,
});