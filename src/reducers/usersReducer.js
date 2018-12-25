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

const initState = {
  name: "Shashank",
  isFetching: false,
  data: {},
  tags: {},
  fetchingTags: false,
  qouData: {},
  fetchingQou: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING_USERS_INFO:
      return { ...state, isFetching: true };
    case FETCHING_USERS_INFO_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCHING_USERS_INFO_ERROR:
      return { ...state, isFetching: false, data: action.error };
    case FETCHING_USERS_TOP_TAGS:
      return { ...state, fetchingTags: true };
    case FETCHING_USERS_TOP_TAGS_SUCCESS:
      return { ...state, fetchingTags: false, tags: action.tagsData };
    case FETCHING_USERS_TOP_TAGS_ERROR:
      return { ...state, fetchingTags: false, tags: action.error };
    case FETCHING_QOU:
      return { ...state, fetchingQou: true };
    case FETCHING_QOU_SUCCESS:
      return { ...state, fetchingQou: false, qouData: action.qouData };
    case FETCHING_QOU_ERROR:
      return { ...state, fetchingQou: false, qouData: action.error };
    default:
      return state;
  }
};
