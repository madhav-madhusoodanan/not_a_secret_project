import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/communities`;

import AsyncStorage from '@react-native-async-storage/async-storage';
const returnToken = async () => {
  const token = await AsyncStorage.getItem('verseAuthToken');
  return token;
};

export const getCommunities =
  (query: any = '') =>
  async (dispatch: any) => {
    dispatch({type: types.GET_COMMUNITIES_LOADING});
    try {
      const token = await returnToken();
      const response = await axios.get(`${url}?${query}`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.GET_COMMUNITIES_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log({error});
      // const displayErr = error.response.data.error.split(',')[0];
      // @ts-ignore
      dispatch({type: types.GET_COMMUNITIES_FAIL, payload: error?.respnse});
    }
  };

export const sendOTP = (phone: string) => async (dispatch: any) => {
  
}