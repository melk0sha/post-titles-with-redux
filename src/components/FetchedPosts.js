import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThunkPosts, fetchSagaPosts } from "../actions";
import Loader from "./Loader";
import Post from "./Post";

/**
 * Using React Hooks with functional component to work with Redux
 */

const FetchedPosts = ({ type }) => {
  const isSaga = type === "Saga";
  const isThunk = type === "Thunk";
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts[`fetched${type}Posts`]);
  const loading = useSelector((state) => state.app.loading);

  if ((loading.thunk && isThunk) || (loading.saga && isSaga)) {
    return <Loader />;
  }

  const onClickHandler = () => {
    const fetchPosts = () => {
      if (isSaga) {
        return fetchSagaPosts();
      } else if (isThunk) {
        return fetchThunkPosts();
      }
    };

    dispatch(fetchPosts());
  };

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={onClickHandler}>
        Load a post
      </button>
    );
  }

  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
