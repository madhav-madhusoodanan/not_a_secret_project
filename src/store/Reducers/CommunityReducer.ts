import {
  GET_COMMUNITIES_FAIL,
  GET_COMMUNITIES_SUCCESS,
  GET_COMMUNITIES_LOADING,
  GET_COMMUNITY_FAIL,
  GET_COMMUNITY_LOADING,
  GET_COMMUNITY_SUCCESS,
  JOIN_LOADING,
  JOIN_COMMUNITY_FAIL,
  JOIN_COMMUNITY_SUCCESS,
  LEAVE_COMMUNITY_FAIL,
  LEAVE_COMMUNITY_SUCCESS
} from '../types';

const initialState = {
  communities: null,
  loading: false,
  community: false,
  error: null,
  joinLoading: false
};
export const Community = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case GET_COMMUNITIES_LOADING:
    case GET_COMMUNITY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case JOIN_LOADING:
      return {
        ...state,
        joinLoading: true
      }
    case GET_COMMUNITIES_SUCCESS:
      return {
        ...state,
        communities: payload,
        loading: false,
        error: null,
      };
    case GET_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: payload,
        loading: false,
        error: null
      }
    case JOIN_COMMUNITY_SUCCESS:
    case LEAVE_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: payload,
        error: null,
        joinLoading: false
      }
    case GET_COMMUNITIES_FAIL:
      return {
        ...state,
        error: payload,
        communities: null,
        community: null,
      };
    default:
      return state;
  }
};
