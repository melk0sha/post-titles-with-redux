import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

/**
 * Using connect function from 'react-redux' with functional component to work with Redux
 */

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>There are no posts</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.syncPosts,
  };
};

export default connect(mapStateToProps, null)(Posts);
