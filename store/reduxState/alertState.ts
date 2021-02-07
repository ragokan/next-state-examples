import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { R4 } from "../../utils/RandomNumber";
import { AppDispatch } from "./store";

interface IAlert {
  id: number;
  text: string;
}

const alertState = createSlice({
  name: "alerts",
  initialState: [] as IAlert[],
  reducers: {
    addAlert: (state, action: PayloadAction<IAlert>) => [action.payload, ...state],

    filterAlert: (state, action: PayloadAction<number>) => state.filter((alert) => alert.id !== action.payload),
  },
});

export const alertReducer = alertState.reducer;
export const { addAlert, filterAlert } = alertState.actions;

export const AddAlertAction = () => async (dispatch: AppDispatch) => {
  const newAlert: IAlert = { id: R4(), text: String(R4()) };
  dispatch(addAlert(newAlert));
  setTimeout(() => dispatch(filterAlert(newAlert.id)), 2500);
};
