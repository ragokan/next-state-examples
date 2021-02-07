import { R4 } from "../../utils/RandomNumber";
import { action, makeObservable, observable } from "mobx";

interface IAlert {
  id: number;
  text: string;
}

class AlertState {
  alerts: IAlert[] = [];

  constructor() {
    makeObservable(this, {
      alerts: observable,
    });
  }

  addAlert() {
    const newAlert: IAlert = {
      id: R4(),
      text: String(R4()),
    };
    this.alerts.unshift(newAlert);

    setTimeout(() => {
      this.alerts = this.alerts.filter((alert) => alert.id !== newAlert.id);
    }, 2500);
  }
}

export const alertState = new AlertState();
