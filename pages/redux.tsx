import React from "react";
import { filterPosts } from "../reduxState/postsState";
import { useAppDispatch, useAppSelector } from "../reduxState/store";

const redux: React.FC = () => {
  const { posts } = useAppSelector();
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(filterPosts())}>Filter</button>
      {posts.map((post) => (
        <div id={String(post.id)}>{post.title}</div>
      ))}
    </div>
  );
};

export default redux;
