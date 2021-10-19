import { ERROR_CATCH } from "../types/errorTypes";

const initialState = { errors: null };

export const errorReducer = (state = initialState, actions) => {
  if (actions.type === ERROR_CATCH) {
    return { errors: actions.error_responses };
  }
  return state;
};
