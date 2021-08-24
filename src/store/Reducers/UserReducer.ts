import {
  PROFILE_LOADING,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from '../types';

const initialState = {
  profile: null,
  loading: false,
  error: null,
};
export const User = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case PROFILE_LOADING:
      return {...state, loading: true};
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.user,
        error: null,
        loading: false,
      };
    case GET_PROFILE_FAIL:
      return {...state, error: payload, loading: false};
    default:
      return state;
  }
};
