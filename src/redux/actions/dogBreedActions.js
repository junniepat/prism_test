import { INIT_DOG_BREED, DOG_BREED_IMAGES } from "../types/dogBreedTypes";
import { ERROR_CATCH } from "../types/errorTypes";
import axios from "axios";

function breeds(dogbreeds) {
  return {
    type: INIT_DOG_BREED,
    dogbreeds,
  };
}

function breedsImages(breeds_images) {
    return {
        type: DOG_BREED_IMAGES,
        breeds_images,
      };
}

export function getDogBreeds() {
    //get dogs breads
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_HOME_URL}/breeds/list/all`)
      .then((res) => {
        dispatch(breeds(res.data.message));
      })
      .catch((err) => {
        dispatch({
          type: ERROR_CATCH,
          error_responses: {
            error_msg: err.response?.data.message,
            error_code: err.response?.data.code,
          },
        });
      });
  };
}


export function getDogBreedsByName(breedName) {
    //pass down the breed name
    return (dispatch, getState) => {
      axios
        .get(`${process.env.REACT_APP_HOME_URL}/breed/${breedName}/images`)
        .then((res) => {
            console.log(res.data)
          dispatch(breedsImages(res.data.message));
        })
        .catch((err) => {
          dispatch({
            type: ERROR_CATCH,
            error_responses: {
              error_msg: err.response?.data.message,
              error_code: err.response?.data.code,
            },
          });
        });
    };
  }
