import { NextPage } from "next";
import React, { useEffect } from "react";
import { useProxy } from "valtio";
import { filterPosts, postState } from "../store/valtioState/postsState";

const Valtio: NextPage = () => {
  const { posts } = useProxy(postState);
  useEffect(() => console.log("hoppala"), [posts]);

  return (
    <div>
      <button className="btn btn-primary mb-3" type="button" onClick={() => filterPosts()}>
        Filter
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Valtio;
