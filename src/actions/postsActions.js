import {
  CREATE_POST,
  FETCH_THUNK_POSTS,
  REQUEST_POSTS,
} from "../constants/actions";
import { showThunkLoader, hideThunkLoader, showAlert } from "./appActions";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchSagaPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export function fetchThunkPosts() {
  return async (dispatch) => {
    try {
      dispatch(showThunkLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=4"
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_THUNK_POSTS, payload: json });
        dispatch(hideThunkLoader());
      }, 500);
    } catch (e) {
      dispatch(showAlert("Something went wrong"));
      dispatch(hideThunkLoader());
    }
  };
}
