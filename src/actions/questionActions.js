import axios from "axios";
import {
  FETCHING_QUESTIONS,
  FETCHING_QUESTIONS_SUCCESS,
  FETCHING_QUESTIONS_ERROR
} from "Constants/questionsConstants";

export const fetchingQuestions = () => {
  return {
    type: FETCHING_QUESTIONS
  };
};

export const fetchingQuestionsSuccess = data => {
  return {
    type: FETCHING_QUESTIONS_SUCCESS,
    data
  };
};

export const fetchingQuestionsError = error => {
  return {
    type: FETCHING_QUESTIONS_ERROR,
    error
  };
};

export const getQuestions = () => {
  return dispatch => {
    dispatch(fetchingQuestions());
    axios
      .get(
        "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow"
      )
      .then(response => {
        console.log(response);
        dispatch(fetchingQuestionsSuccess(response.data));
      })
      .catch(function(error) {
        console.log(error);
        dispatch(fetchingQuestionsError(error));
      });
  };
};
