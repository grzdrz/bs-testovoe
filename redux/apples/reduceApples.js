import { DELETE_APPLES_COUNT, INCREASE_APPLES_COUNT } from "./actions.types";

const initialState = {
  applesCount: 0,
};

const reduceApples = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case DELETE_APPLES_COUNT: {
      stateCopy.applesCount = 0;
      return stateCopy;
    }
    case INCREASE_APPLES_COUNT: {
      stateCopy.applesCount += action.payload.value;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default reduceApples;
