import React from "react";

const Post = ({ post }) => {
  const { title } = post;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
export default Post;
