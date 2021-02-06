import { NextPage } from "next";
import React, { useEffect } from "react";
import { useProxy } from "valtio";
import { filterPosts, postState } from "../valtioState/postsState";

const Valtio: NextPage = () => {
  const { posts } = useProxy(postState);
  useEffect(() => console.log("hoppala"), [posts]);

  return (
    <div>
      <button onClick={() => filterPosts()}>Filter</button>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Valtio;
