import React, { useEffect } from "react";
import { filterPosts } from "../store/reduxState/postsState";
import { useAppDispatch, useAppSelector } from "../store/reduxState/store";

const redux: React.FC = () => {
  const { posts } = useAppSelector();
  const dispatch = useAppDispatch();

  useEffect(() => console.log("hoppala"), [posts]);

  return (
    <div>
      <button className="btn btn-primary mb-3" type="button" onClick={() => dispatch(filterPosts())}>
        Filter
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" id={String(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default redux;
