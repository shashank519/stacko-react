import {
  FETCHING_QUESTIONS,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_ERROR
} from "Constants/questionsConstants";

const initState = {
  name: "Shashank",
  isFetching: false,
  data: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING_QUESTIONS:
      return { ...state, isFetching: true };
    case FETCHING_QUESTIONS_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCHING_QUESTIONS_ERROR:
      return { ...state, isFetching: false, data: action.error };
    default:
      return state;
  }
};
