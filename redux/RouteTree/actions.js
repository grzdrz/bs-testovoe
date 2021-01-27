/* eslint-disable import/prefer-default-export */
import {
  ADD_NODE,
  REMOVE_NODE,
} from './actions.types';

export const addNode = ({ currentNode, routeSegment, title }) => ({
  type: ADD_NODE,
  payload: {
    currentNode,
    routeSegment,
    title,
  },
});

export const removeNode = (node) => ({
  type: REMOVE_NODE,
  payload: { node },
});
