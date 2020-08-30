import { combinerReducers, combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
