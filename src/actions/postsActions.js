import { CREATE_POST, FETCH_POSTS, REQUEST_POSTS } from "../constants/actions";
import { showLoader, hideLoader, showAlert } from "./appActions";

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
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: json });
        dispatch(hideLoader());
      }, 500);
    } catch (e) {
      dispatch(showAlert("Something went wrong"));
      dispatch(hideLoader());
    }
  };
}
