import create, { State, PartialState } from "zustand";
import { devtools } from "zustand/middleware";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostState extends State {
  posts: IPost[];
}

export const postState = create<IPostState>(
  devtools((set, get, api) => ({
    posts: [],
  }))
);

export const setPostState = (partial: PartialState<IPostState>) => postState.setState(partial);
export const getPostState = postState.getState;

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  setPostState({ posts: await resp.json() });
})();
