import { combineReducers } from 'redux';

import reduceApples from './apples/reduceApples';

const rootReducer = combineReducers({
  apples: reduceApples,
});

export default rootReducer;
