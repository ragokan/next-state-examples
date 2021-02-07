import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { R4 } from "../../utils/RandomNumber";

interface IAlert {
  id: number;
  text: string;
}

interface IAlertState {
  alerts: IAlert[];
}

export const alertState = proxy<IAlertState>({ alerts: [] });

export const addAlert = () => {
  const newAlert: IAlert = {
    id: R4(),
    text: String(R4()),
  };
  alertState.alerts.unshift(newAlert);

  setTimeout(() => {
    alertState.alerts = alertState.alerts.filter((alert) => alert.id !== newAlert.id);
  }, 2500);
};

devtools(alertState, "Alerts State");
