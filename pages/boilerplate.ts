import create, { State, PartialState } from "zustand";
import { devtools } from "zustand/middleware";

interface IPostState extends State {}

export const postState = create<IPostState>(devtools((set, get, api) => ({})));

export const setPostState = (partial: PartialState<IPostState>) => postState.setState(partial);
export const getPostState = postState.getState;
export const subPostState = postState.subscribe;
