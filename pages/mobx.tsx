import { observer } from "mobx-react";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { postState } from "../mobxState/postsState";

const Mobx: NextPage = () => {
  useEffect(() => console.log("hoppala"), [postState.posts]);
  return (
    <div>
      <button onClick={() => postState.filterPosts()}>Filter</button>
      {postState.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default observer(Mobx);
