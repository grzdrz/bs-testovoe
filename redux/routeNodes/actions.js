/* eslint-disable import/prefer-default-export */
import {
  ADD_NODE,
  REMOVE_CURRENT_NODE,
  MOVE_FORWARD,
  MOVE_BACK,
} from './actions.types';

export const addNode = ({ route, title }) => ({
  type: ADD_NODE,
  payload: {
    route,
    title,
  },
});

export const removeCurrentNode = () => ({
  type: REMOVE_CURRENT_NODE,
});

export const moveForward = (route) => ({
  type: MOVE_FORWARD,
  payload: { route },
});

export const moveBack = () => ({
  type: MOVE_BACK,
});
