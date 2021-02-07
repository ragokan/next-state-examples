import React from "react";
import { NextPage } from "next";
import { alertState } from "../store/mobxState/alertState";
import { observer } from "mobx-react";

const MobxAlert: NextPage = observer(() => {
  return (
    <div>
      <button onClick={() => alertState.addAlert()}>Add Alert</button>
      {alertState.alerts.map((alert) => (
        <p key={alert.id}>{alert.text}</p>
      ))}
    </div>
  );
});

export default MobxAlert;
