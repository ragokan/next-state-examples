import { action, makeObservable, observable, observe } from "mobx";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class PostState {
  posts: IPost[] = [];

  constructor() {
    makeObservable(this, {
      posts: observable,
      setPosts: action,
      filterPosts: action,
    });
  }

  setPosts(newPosts: IPost[]) {
    this.posts = newPosts;
  }

  filterPosts() {
    this.posts = this.posts.filter((item, index) => index !== 0);
  }
}
const postState = new PostState();

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  postState.setPosts(posts);
})();

export { postState };
