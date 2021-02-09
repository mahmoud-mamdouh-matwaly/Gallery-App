import { useReducer } from "react";
import { retrieveData } from "./helper";
import { galleryApi } from "../api";

const initialState = {
  data: [],
  error: false,
  list: []
};

function galleryReducer(state, action) {
  switch (action.type) {
    case "FETCH_Gallery":
      let retrieveResult = retrieveData(action.payload);
      return {
        ...state,
        data: retrieveResult
      };
    case "SET_LIST":
      return {
        ...state,
        list: [...state.list, ...state.data[action.payload]]
      };

    case "FETCH_ERROR":
      return {
        ...state,
        error: true
      };

    case "REST_STATE":
      return initialState;

    default:
      return state;
  }
}

export default function useGallery({ reducer = galleryReducer } = {}) {
  const [{ data, error, list }, dispatch] = useReducer(reducer, initialState);

  const handleFetchGallery = async (type = "food") => {
    dispatch({ type: "REST_STATE" });

    try {
      const response = await galleryApi(type);
      dispatch({ type: "FETCH_Gallery", payload: response });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  const setList = page => {
    dispatch({ type: "SET_LIST", payload: page });
  };

  return { data, error, handleFetchGallery, setList, list };
}
