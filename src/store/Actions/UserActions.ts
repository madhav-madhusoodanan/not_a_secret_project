import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/users`;

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

export const getMe =
  (navigate: null | any, token: string) => async (dispatch: any) => {
    dispatch({type: types.AUTH_LOADING});
    try {
      const {data} = await axios.get(`${url}/me`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log({data});
      dispatch({
        type: types.GET_PROFILE_SUCCESS,
        payload: {user: data.data, token},
      });
    } catch (error) {
      // const displayErr = error.response.data.error.split(',')[0];
      dispatch({
        type: types.GET_PROFILE_FAIL,
        // @ts-ignore
        payload: error.respnse.data.error,
      });
    }
  };
