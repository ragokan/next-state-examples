import { observer } from "mobx-react";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { postState } from "../store/mobxState/postsState";

const Mobx: NextPage = () => {
  useEffect(() => console.log("hoppala"), [postState.posts]);
  return (
    <div>
      <button className="btn btn-primary mb-3" type="button" onClick={() => postState.filterPosts()}>
        Filter
      </button>
      <ul className="list-group">
        {postState.posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Mobx);
