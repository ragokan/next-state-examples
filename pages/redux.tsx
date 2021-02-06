import React, { useEffect } from "react";
import { filterPosts } from "../store/reduxState/postsState";
import { useAppDispatch, useAppSelector } from "../store/reduxState/store";

const redux: React.FC = () => {
  const { posts } = useAppSelector();
  const dispatch = useAppDispatch();

  useEffect(() => console.log("hoppala"), [posts]);

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
