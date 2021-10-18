import {
  GET_PARK_LIST_REQUEST,
  GET_PARK_LIST_SUCCESS,
  GET_PARK_LIST_FAIL,
  GET_PARK_DETAILS_REQUEST,
  GET_PARK_DETAILS_SUCCESS,
  GET_PARK_DETAILS_FAIL,
} from "./constants";

export const getParksReducer = (state = { parks: [] }, action) => {
  switch (action.type) {
    case GET_PARK_LIST_REQUEST:
      return {
        loading: true,
      };
    case GET_PARK_LIST_SUCCESS:
      return {
        loading: false,
        parks: action.payload,
      };
    case GET_PARK_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getParkDetailsReducer = (state = { park: {} }, action) => {
  switch (action.type) {
    case GET_PARK_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PARK_DETAILS_SUCCESS:
      return {
        loading: false,
        park: action.payload,
      };
    case GET_PARK_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
