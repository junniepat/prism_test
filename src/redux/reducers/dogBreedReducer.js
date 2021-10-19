import { INIT_DOG_BREED } from "../types/dogBreedTypes";

const initialState = { breeds: null };

export const breedReducer = (state = initialState, actions) => {
  if (actions.type === INIT_DOG_BREED) {
    return { breeds: actions.dogbreeds };
  }
  return state;
};