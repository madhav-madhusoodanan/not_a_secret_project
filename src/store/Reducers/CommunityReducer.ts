import {
  GET_COMMUNITIES_FAIL,
  GET_COMMUNITIES_SUCCESS,
  GET_COMMUNITIES_LOADING,
} from '../types';

const initialState = {
  communities: null,
  loading: false,
  community: false,
  error: null,
};
export const Community = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case GET_COMMUNITIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMUNITIES_SUCCESS:
      return {
        ...state,
        communities: payload,
        loading: false,
        error: null,
      };
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
