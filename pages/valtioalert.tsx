import React from "react";
import { NextPage } from "next";
import { useProxy } from "valtio";
import { addAlert, alertState } from "../store/valtioState/alertState";

const ValtioAlert: NextPage = () => {
  const { alerts } = useProxy(alertState);
  return (
    <div>
      <button onClick={addAlert}>Add Alert</button>
      {alerts.map((alert) => (
        <p key={alert.id}>{alert.text}</p>
      ))}
    </div>
  );
};

export default ValtioAlert;
