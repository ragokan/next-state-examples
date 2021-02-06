import { NextPage } from "next";
import React, { useEffect } from "react";
import { getPostState, postState, setPostState } from "../zustandState/PostState";

const Zustand: NextPage = () => {
  const posts = postState((state) => state.posts);
  useEffect(() => console.log("hoppala"), [posts]);

  return (
    <div>
      <button onClick={() => setPostState({ posts: posts.filter((item, index) => index !== 0) })}>Smt</button>
      {posts.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Zustand;
