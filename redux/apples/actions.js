/* eslint-disable import/prefer-default-export */
import { DELETE_APPLES_COUNT, INCREASE_APPLES_COUNT } from './actions.types';

export const deleteApplesCount = () => ({
  type: DELETE_APPLES_COUNT,
});

export const increaseApplesCount = (value) => ({
  type: INCREASE_APPLES_COUNT,
  payload: { value },
});
