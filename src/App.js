import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

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
          <FetchedPosts type="Thunk" />
        </div>
        <div className="col text-center">
          <h2>Async Saga Posts</h2>
          <FetchedPosts type="Saga" />
        </div>
      </div>
    </div>
  );
}

export default App;
