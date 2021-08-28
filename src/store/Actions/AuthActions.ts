import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/users`;
import AsyncStorage from '@react-native-async-storage/async-storage';
const returnToken = async () => {
  const token = await AsyncStorage.getItem('verseAuthToken');
  return token;
};

export const getPhoneNums = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${url}?select=phone`);
    const nums: any = [];
    response.data.data.map((each: any) => nums.push(each.phone));
    console.log(nums);
    dispatch({type: types.GET_PHONE_NUMS, payload: nums});
  } catch (error) {
    console.log({error});
    // const displayErr = error.response.data.error.split(',')[0];
    // @ts-ignore
    dispatch({type: types.PHONE_NUMS_FAIL, payload: error?.respnse});
  }
};

export const sendOTP = (phone: string) => async (dispatch: any) => {
  dispatch({type: types.GET_OTP_LOADING});
  try {
    const {data} = await axios.get(`${url}/sendOTP/${phone}`);
    console.log({data});
    dispatch({type: types.GET_OTP_SUCCESS, payload: data});
  } catch (error) {
    console.log({error});
    // const displayErr = error.response.data.error.split(',')[0];
    // @ts-ignore
    dispatch({type: types.GET_OTP_FAIL, payload: error?.respnse});
  }
};

export const loginuser =
  (values: any, navigate: null | any) => async (dispatch: any) => {
    dispatch({type: types.AUTH_LOADING});
    try {
      const {data} = await axios.post(`${url}/signup`, values);
      dispatch({type: types.AUTH_SUCCESS, payload: data});
      console.log({data});
      if (data.data) {
        navigate('Home');
      }
    } catch (error) {
      console.log({error});
      // @ts-ignore
      const displayErr = error.response.data.error.split(',')[0];
      dispatch({type: types.AUTH_FAIL, payload: displayErr});
    }
  };

export const updateuser = (values: any, id: any) => async (dispatch: any) => {
  dispatch({type: types.AUTH_LOADING});
  try {
    const token = await returnToken();
    const {data} = await axios.put(`${url}/${id}`, values, {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({type: types.UPDATE_PROFILE_SUCCESS, payload: {user: data.data}});
  } catch (error) {
    console.log({error});
    // @ts-ignore
    // const displayErr = error.response.data.error.split(',')[0];
    dispatch({type: types.UPDATE_PROFILE_FAIL, payload: 'displayErr'});
  }
};

export const getMe =
  (navigate: null | any, token: string) => async (dispatch: any) => {
    dispatch({type: types.AUTH_LOADING});
    try {
      console.log('reached');
      const {data, status} = await axios.get(`${url}/me`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log('reached2');
      console.log({status});
      dispatch({
        type: types.GET_ME_SUCCESS,
        payload: {user: data.data, token},
      });
    } catch (error) {
      // const displayErr = error.response.data.error.split(',')[0];
      dispatch({
        type: types.GET_ME_FAIL,
        // @ts-ignore
        payload: error.respnse.data.error,
      });
    }
  };

export const logoutUser = (navigate: null | any) => async (dispatch: any) => {
  dispatch({type: types.AUTH_LOADING});
  try {
    const {data, status} = await axios.get(`${url}/logout`);
    console.log({data, status});
    if (status === 200 && data.success) {
      console.log('we will miss you')
      dispatch({
        type: types.LOGOUT_SUCCESS,
        payload: null,
      });
      // navigate('Auth')
    }
  } catch (error) {
    // const displayErr = error.response.data.error.split(',')[0];
    dispatch({
      type: types.LOGOUT_FAIL,
      // @ts-ignore
      payload: error.respnse.data.error,
    });
  }
};
