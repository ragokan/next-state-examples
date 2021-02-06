import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postState = createSlice({
  name: "posts",
  initialState: [] as IPost[],
  reducers: {
    fetchPosts: (state, action: PayloadAction<IPost[]>) => (state = action.payload),
    filterPosts: (state) => state.filter((item, index) => index !== 0),
  },
});

export const postReducer = postState.reducer;
export const { fetchPosts, filterPosts } = postState.actions;
