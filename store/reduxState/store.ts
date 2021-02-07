import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { alertReducer } from "./alertState";
import { fetchPosts, postReducer } from "./postsState";

const rootReducer = combineReducers({
  posts: postReducer,
  alerts: alertReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: false,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppState = () => useSelector((state: AppState) => state);

(async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  store.dispatch(fetchPosts(posts));
})();

export default store;
