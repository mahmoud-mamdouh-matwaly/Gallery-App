import { useReducer } from "react";

const initialState = {
  page: 0
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: state.page + 1
      };

    case "REST_PAGE":
      return initialState;
    default:
      return state;
  }
};

export default function usePage({ reducer = pageReducer } = {}) {
  const [{ page }, dispatch] = useReducer(reducer, initialState);

  const handlePage = () => dispatch({ type: "SET_PAGE" });
  const handleRestPage = () => dispatch({ type: "REST_PAGE" });

  return { page, handlePage, handleRestPage };
}
