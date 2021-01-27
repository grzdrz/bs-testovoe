import {
  ADD_NODE,
  REMOVE_NODE,
} from './actions.types';
import initialState from './initialState';

const reduceRouteTree = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case ADD_NODE: {
      const { routeSegment, title } = action.payload;
      stateCopy.routeTree.add(routeSegment, title);
      return stateCopy;
    }
    case REMOVE_NODE: {
      stateCopy.routeTree.remove(action.payload.node);
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default reduceRouteTree;
