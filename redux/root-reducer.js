import { combineReducers } from 'redux';

import reduceApples from './apples/reduceApples';
import reduceRouteNodes from './routeNodes/reduceRouteNodes';

const rootReducer = combineReducers({
  apples: reduceApples,
  routeNodes: reduceRouteNodes,
});

export default rootReducer;
