import { combineReducers } from 'redux';

import reduceApples from './apples/reduceApples';
import reduceRouteTree from './RouteTree/reduceRouteTree';

const rootReducer = combineReducers({
  apples: reduceApples,
  routeTree: reduceRouteTree,
});

export default rootReducer;
