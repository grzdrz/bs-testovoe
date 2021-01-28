import { combineReducers } from 'redux';

import reduceRouteTree from './RouteTree/reduceRouteTree';

const rootReducer = combineReducers({
  routeTree: reduceRouteTree,
});

export default rootReducer;
