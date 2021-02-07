import { NextPage } from "next";
import React, { useEffect } from "react";
import { postState, setPostState } from "../store/zustandState/postsState";

const Zustand: NextPage = () => {
  const posts = postState((state) => state.posts);
  useEffect(() => console.log("hoppala"), [posts]);

  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setPostState({ posts: posts.filter((item, index) => index !== 0) })}
      >
        Smt
      </button>
      <ul className="list-group">
        {posts.map((post: any) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Zustand;
