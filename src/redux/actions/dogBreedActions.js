import { INIT_DOG_BREED } from "../types/dogBreedTypes";
import  { ERROR_CATCH } from "../types/errorTypes";
import axios from "axios";

function breeds(dogbreeds) {
    return {
      type: INIT_DOG_BREED,
      dogbreeds
    };
}




export function getDogBreeds() {
    return (dispatch, getState) => {
           
    axios.get(`${process.env.REACT_APP_HOME_URL}/breeds/lit/all`)
    .then((res) => {
        dispatch(breeds(res.data.message));
    })
    .catch((err) => {
        dispatch({ 
            type: ERROR_CATCH,
            error_responses: {
                error_msg: err.response?.data.message,
                error_code: err.response?.data.code
            }
        });
    });
    };
}