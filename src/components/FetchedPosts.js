import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThunkPosts, fetchSagaPosts } from "../actions";
import { Loader } from "./Loader";
import Post from "./Post";

const FetchedPosts = ({ type }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts[`fetched${type}Posts`]);
  const loading = useSelector((state) => state.app.loading);

  if (
    (loading.thunk && type === "Thunk") ||
    (loading.saga && type === "Saga")
  ) {
    return <Loader />;
  }

  const onButtonClick = () => {
    // if (type === "Saga") {
    //   fetchSagaPosts();
    // }
    // if (type === "Thunk") {
    //   fetchThunkPosts();
    // }

    dispatch(
      type === "Saga" ? fetchSagaPosts() : type === "Thunk" && fetchThunkPosts()
    );
  };

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={onButtonClick}>
        Load a post
      </button>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default FetchedPosts;
