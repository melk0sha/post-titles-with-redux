import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedSagaPosts from "./components/FetchedSagaPosts";
import FetchedThunkPosts from "./components/FetchedThunkPosts";

function App() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row text-center pt-5">
        <div className="col ">
          <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col text-center">
          <h2>Async Thunk Posts</h2>
          <FetchedThunkPosts />
        </div>
        <div className="col text-center">
          <h2>Async Saga Posts</h2>
          <FetchedSagaPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
