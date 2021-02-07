import create, { State, PartialState } from "zustand";
import { devtools } from "zustand/middleware";
import { R4 } from "../../utils/RandomNumber";

interface IAlert {
  id: number;
  text: string;
}

interface IAlertState extends State {
  alerts: IAlert[];
  addAlert: () => void;
  filterAlert: (id: number) => void;
}

export const alertState = create<IAlertState>(
  devtools((set, get, api) => ({
    alerts: [],
    addAlert: () => {
      const newAlert: IAlert = {
        id: R4(),
        text: String(R4()),
      };
      set((state) => ({ alerts: [newAlert, ...state.alerts] }));

      setTimeout(() => {
        api.getState().filterAlert(newAlert.id);
      }, 2500);
    },
    filterAlert: (id) => set((state) => ({ alerts: state.alerts.filter((alert) => alert.id !== id) })),
  }))
);

// export const setAlertState = (partial: PartialState<IAlertState>) => alertState.setState(partial);
// export const getAlertState = alertState.getState;
// export const subAlertState = alertState.subscribe;
