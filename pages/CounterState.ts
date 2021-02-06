import create, { State, PartialState } from "zustand";
import { devtools } from "zustand/middleware";

interface ICounter extends State {
  count: number;
  setCount: (c: number) => void;
  increaseCount: () => void;
}

export const counterState = create<ICounter>(
  devtools((set, get, api) => ({
    count: 0,
    selamlar: 0,
    setCount: (newCount) => {
      set({ count: newCount });
      // api.getState().setCount(newCount + 1);
    },

    increaseCount: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }))
);

export const setCounterState = (partial: PartialState<ICounter>) => counterState.setState(partial);
export const getCounterState = counterState.getState;
export const subCounterState = counterState.subscribe;

setCounterState({ count: 31 });
const { count } = getCounterState();

export const { increaseCount, setCount } = getCounterState();
