import * as types from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  loading: false,
  error: null,
  nums: [],
  otp: null,
};
export const User = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case types.GET_OTP_LOADING:
    case types.AUTH_LOADING:
      return {...state, loading: true};
    case types.GET_PHONE_NUMS:
      return {...state, nums: payload};
    case types.GET_OTP_SUCCESS:
      return {...state, loading: false, otp: payload.otp};
    case types.AUTH_SUCCESS:
      const {data, token} = payload;
      console.log('reached');
      AsyncStorage.setItem('verseAuthToken', token);
      return {
        ...state,
        user: data,
        error: null,
        loading: false,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload.user,
        error: null,
        loading: false,
      };
    case types.PHONE_NUMS_FAIL:
    case types.GET_OTP_FAIL:
      return {...state, loading: false, error: payload};
    case types.AUTH_FAIL:
    case types.GET_PROFILE_FAIL:
      console.log('reached error', payload)
      AsyncStorage.removeItem('verseAuthToken');
      return {...state, user: null, error: payload, loading: false};
    default:
      return state;
  }
};
