import { CREATE_POST, FETCH_THUNK_POSTS, FETCH_SAGA_POSTS } from "../constants";

const initialState = {
  syncPosts: [],
  fetchedThunkPosts: [],
  fetchedSagaPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, syncPosts: [...state.syncPosts, action.payload] };
    case FETCH_THUNK_POSTS:
      return { ...state, fetchedThunkPosts: action.payload };
    case FETCH_SAGA_POSTS:
      return { ...state, fetchedSagaPosts: action.payload };
    default:
      return state;
  }
};
