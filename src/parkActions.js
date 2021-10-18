import axios from "axios";
import {
  GET_PARK_LIST_REQUEST,
  GET_PARK_LIST_SUCCESS,
  GET_PARK_LIST_FAIL,
  GET_PARK_DETAILS_REQUEST,
  GET_PARK_DETAILS_SUCCESS,
  GET_PARK_DETAILS_FAIL,
} from "./constants";

export const listParks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PARK_LIST_REQUEST });

    const { data } = await axios.get(
      `https://developer.nps.gov/api/v1/parks?stateCode=NY&api_key=g2UkMEBlJvAehsObS0DcQdmdVPsk145HdE9iimsP`
    );

    dispatch({
      type: GET_PARK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PARK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getParkDetails = (parkId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PARK_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://developer.nps.gov/api/v1/parks?stateCode=NY&api_key=g2UkMEBlJvAehsObS0DcQdmdVPsk145HdE9iimsP`
    );

    let filteredPark = {};
    if (data.data.length > 0) {
      filteredPark = data.data.filter((park) => park.id === parkId);
    }

    dispatch({
      type: GET_PARK_DETAILS_SUCCESS,
      payload: filteredPark[0],
    });
  } catch (error) {
    dispatch({
      type: GET_PARK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
