import React from "react";
import { useSelector } from "react-redux";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const comments = useSelector((store) => {
    return store.comments;
  });
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
