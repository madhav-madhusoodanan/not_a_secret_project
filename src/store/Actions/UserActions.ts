import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/users`;
import AsyncStorage from '@react-native-async-storage/async-storage';

const returnToken = async () => {
  const token = await AsyncStorage.getItem('verseAuthToken');
  return token;
};

export const getProfile =
  (navigate: null | any, id: any) => async (dispatch: any) => {
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
