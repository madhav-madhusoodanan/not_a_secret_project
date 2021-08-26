import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/users`;
import AsyncStorage from '@react-native-async-storage/async-storage';

const returnToken = async () => {
  const token = await AsyncStorage.getItem('verseAuthToken');
  return token;
};

export const getProfile =
  (id: any) => async (dispatch: any) => {
    dispatch({type: types.PROFILE_LOADING});
    try {
      const token = await returnToken();
      const {data} = await axios.get(`${url}/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.GET_PROFILE_SUCCESS,
        payload: {user: data.data},
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

export const followUser =
  (id: any) => async (dispatch: any) => {
    dispatch({type: types.FOLLOW_LOADING});
    try {
      const token = await returnToken();
      const {data} = await axios.put(`${url}/follow/${id}`,{}, {
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.FOLLOW_SUCCESS,
        payload: {user: data.data},
      });
    } catch (error) {
      // const displayErr = error.response.data.error.split(',')[0];
      dispatch({
        type: types.FOLLOW_FAIL,
        // @ts-ignore
        payload: error.respnse.data.error,
      });
    }
  };

export const unfollowUser =
  (id: any) => async (dispatch: any) => {
    dispatch({type: types.FOLLOW_LOADING});
    try {
      const token = await returnToken();
      const {data} = await axios.put(`${url}/unfollow/${id}`,{}, {
        headers: {Authorization: `Bearer ${token}`},
      });
      console.log({ datttttaaaaaaaaa: data.data })
      dispatch({
        type: types.UNFOLLOW_SUCCESS,
        payload: {user: data.data},
      });
    } catch (error) {
      // const displayErr = error.response.data.error.split(',')[0];
      dispatch({
        type: types.UNFOLLOW_FAIL,
        // @ts-ignore
        payload: error.respnse.data.error,
      });
    }
  };
