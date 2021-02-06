import { observer } from "mobx-react";
import { NextPage } from "next";
import React from "react";
import { postState } from "../mobxState/postsState";

const Mobx: NextPage = () => {
  return (
    <>
      <button onClick={() => postState.filterPosts()}>Filter</button>
      {postState.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default observer(Mobx);
