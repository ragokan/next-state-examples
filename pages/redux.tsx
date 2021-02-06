import React from "react";
import { fetchPosts, filterPosts } from "../reduxState/postsState";
import store, { useAppDispatch, useAppSelector } from "../reduxState/store";

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  store.dispatch(fetchPosts(posts));
})();

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
