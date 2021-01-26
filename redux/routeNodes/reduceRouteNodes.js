import {
  ADD_NODE,
  REMOVE_CURRENT_NODE,
  MOVE_FORWARD,
  MOVE_BACK,
} from './actions.types';
import RouteNodes from '../../shared/helpers/RouteNodes';
import initialState from './initialState';

const reduceRouteNodes = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case ADD_NODE: {
      const { route, title } = action.payload;
      stateCopy.routeNodes.add(route, title);
      return stateCopy;
    }
    case REMOVE_CURRENT_NODE: {
      stateCopy.routeNodes.remove();
      return stateCopy;
    }
    case MOVE_FORWARD: {
      stateCopy.routeNodes.moveForward(action.payload.route);
      return stateCopy;
    }
    case MOVE_BACK: {
      stateCopy.routeNodes.moveBack();
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default reduceRouteNodes;
