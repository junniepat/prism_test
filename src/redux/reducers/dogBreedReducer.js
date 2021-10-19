import { INIT_DOG_BREED, DOG_BREED_IMAGES } from "../types/dogBreedTypes";

const initialState = { breeds: null, breed_images: null };

export const breedReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case INIT_DOG_BREED:
        return { 
            breeds: actions.dogbreeds 
        }
    case DOG_BREED_IMAGES:
        return { 
            ...state,
            breed_images: actions.breeds_images
        }
    default:
        return state;
    }
};