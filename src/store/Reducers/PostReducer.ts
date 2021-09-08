import {
  POST_FAIL,
  POST_SUCCESS,
  GET_POSTS_FAIL,
  POSTS_LOADING,
  NEW_POST_FAIL,
  GET_POSTS_SUCCESS,
  NEW_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
} from '../types';

const initialState = {
  posts: null,
  loading: false,
  post: false,
  error: null,
};
export const Post = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case NEW_POST_SUCCESS:
      return {
        ...state,
        // @ts-ignore
        posts: [payload, ...state.posts],
        loading: false,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
      return {
        ...state,
        // @ts-ignore
        posts: state.posts.map(post =>
          post._id === payload._id
            ? {...post, upvotes: payload.upvotes, downvotes: payload.downvotes, voteCount: payload.voteCount}
            : post,
        ),
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
