import { proxy, subscribe } from "valtio";
import { devtools } from "valtio/utils";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostState {
  posts: IPost[];
}

export const postState = proxy<IPostState>({ posts: [] });

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  postState.posts = posts;
})();

devtools(postState, "Posts State");

export const filterPosts = () => (postState.posts = postState.posts.filter((item, index) => index !== 0));

subscribe(postState, () => {
  console.log("Change Happened!");
});
