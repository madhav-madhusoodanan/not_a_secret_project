import * as types from '../types';
import axios from '../../constants/api';
const url = `/api/v1/posts`;
import AsyncStorage from '@react-native-async-storage/async-storage';
const returnToken = async () => {
  const token = await AsyncStorage.getItem('verseAuthToken');
  return token;
};

export const newPost =
  (data, navigate, showMessage) => async (dispatch: any) => {
    dispatch({type: types.POSTS_LOADING});
    try {
      const token = await returnToken();
      const response = await axios.post(`${url}`, data, {
        headers: {Authorization: `Bearer ${token}`},
      });
      if (response.status === 201) {
        dispatch({
          type: types.NEW_POST_SUCCESS,
          payload: response.data.data,
        });
        navigate('Home');
        showMessage({message: 'Posted Successfully', type: 'success'});
      }
    } catch (error) {
        // @ts-ignore
      console.log({error});
      // @ts-ignore
      showMessage({message: 'errorresponse.data.error', type: 'danger'});
      // const displayErr = error.response.data.error.split(',')[0];
      // @ts-ignore
      dispatch({type: types.NEW_POST_FAIL, payload: error?.respnse?.data});
    }
  };

  export const getPosts =
  (query: any = '') =>
  async (dispatch: any) => {
    dispatch({type: types.POSTS_LOADING});
    try {
      const token = await returnToken();
      const response = await axios.get(`${url}?${query}`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.GET_POSTS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log({error});
      // const displayErr = error.response.data.error.split(',')[0];
      // @ts-ignore
      dispatch({type: types.GET_POSTS_FAIL, payload: error?.respnse});
    }
  };

  export const upVotePost =
  (id: any) =>
  async (dispatch: any) => {
    try {
      const token = await returnToken();
      const response = await axios.put(`${url}/upvote/${id}`,{},{
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.UPVOTE_POST_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log({error});
      // const displayErr = error.response.data.error.split(',')[0];
      // @ts-ignore
      dispatch({type: types.UPVOTE_POST_FAIL, payload: error?.respnse});
    }
  };

  export const downVotePost =
  (id: any) =>
  async (dispatch: any) => {
    try {
      const token = await returnToken();
      const response = await axios.put(`${url}/downvote/${id}`,{},{
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type: types.DOWNVOTE_POST_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      console.log({error});
      // const displayErr = error.response.data.error.split(',')[0];
      // @ts-ignore
      dispatch({type: types.DOWNVOTE_POST_FAIL, payload: error?.respnse});
    }
  };
