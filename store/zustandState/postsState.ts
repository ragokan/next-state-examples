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
  setPosts: (posts: IPost[]) => void;
}

export const postState = create<IPostState>(
  devtools((set) => ({
    posts: [],
    setPosts: (posts: IPost[]) => set({ posts }),
  }))
);

export const setPostState = (partial: PartialState<IPostState>) => postState.setState(partial);
export const getPostState = postState.getState;
export const subPostState = postState.subscribe;
const { setPosts } = getPostState();

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  // setPostState({ posts: await resp.json() });
  setPosts(await resp.json());
  setPostState((state) => ({
    ...state,
    posts: [{ id: 101, body: "hop", title: "hobbalaxdxdxd", userId: 101 }, ...state.posts],
  }));
})();
