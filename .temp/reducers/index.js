import { combineReducers } from 'redux';
import home from './home';
import details from './details';
import search from './search';
export default combineReducers({
  home,
  details,
  search
});