import axios from "axios";

import {
  FETCHING_USERS_INFO,
  FETCHING_USERS_INFO_SUCCESS,
  FETCHING_USERS_INFO_ERROR,
  FETCHING_USERS_TOP_TAGS,
  FETCHING_USERS_TOP_TAGS_SUCCESS,
  FETCHING_USERS_TOP_TAGS_ERROR,
  FETCHING_QOU,
  FETCHING_QOU_SUCCESS,
  FETCHING_QOU_ERROR
} from "Constants/usersConstants.js";

// ==============================GET USERS INFO=============================
export const fetchingUserInfo = () => {
  return {
    type: FETCHING_USERS_INFO
  };
};

export const fetchingUserInfoSuccess = data => {
  return { type: FETCHING_USERS_INFO_SUCCESS, data };
};

export const fetchingUserInfoError = error => {
  return { type: FETCHING_USERS_INFO_ERROR, error };
};

export const getUsersInfo = id => {
  return dispatch => {
    dispatch(fetchingUserInfo());
    axios
      .get(
        `https://api.stackexchange.com/2.2/users/${id}?order=desc&sort=reputation&site=stackoverflow`
      )
      .then(response => {
        dispatch(fetchingUserInfoSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(fetchingUserInfoError(error));
      });
  };
};
// ==============================GET USERS INFO=============================

// ==============================GET USERS TOP TAGS=============================
export const fetchingUserTopTags = () => {
  return {
    type: FETCHING_USERS_TOP_TAGS
  };
};

export const fetchingUsersTopTagsSuccess = tagsData => {
  return { type: FETCHING_USERS_TOP_TAGS_SUCCESS, tagsData };
};

export const fetchingUsersTopTagError = error => {
  return { type: FETCHING_USERS_TOP_TAGS_ERROR, error };
};

export const getUsersTopTags = id => {
  return dispatch => {
    dispatch(fetchingUserTopTags());
    axios
      .get(
        `https://api.stackexchange.com/2.2/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`
      )
      .then(response => {
        dispatch(fetchingUsersTopTagsSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(fetchingUsersTopTagError(error));
      });
  };
};
// ==============================GET USERS TOP TAGS=============================

// ==============================QUESTION ON USERS=============================
export const fetchingQou = () => {
  return {
    type: FETCHING_QOU
  };
};

export const fetchingQouSuccess = qouData => {
  return { type: FETCHING_QOU_SUCCESS, qouData };
};

export const fetchingQouError = error => {
  return { type: FETCHING_QOU_ERROR, error };
};

export const getQuestionOnUsers = id => {
  return dispatch => {
    dispatch(fetchingQou());
    axios
      .get(
        `https://api.stackexchange.com/2.2/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`
      )
      .then(response => {
        dispatch(fetchingQouSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(fetchingQouError(error));
      });
  };
};
// ==============================QUESTION ON USERS=============================
