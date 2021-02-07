import React from "react";
import { NextPage } from "next";
import { alertState } from "../store/zustandState/alertState";

const ZustandAlert: NextPage = () => {
  const { alerts, addAlert } = alertState();
  return (
    <div>
      <button onClick={addAlert}>Add Alert</button>
      {alerts.map((alert) => (
        <p key={alert.id}>{alert.text}</p>
      ))}
    </div>
  );
};

export default ZustandAlert;
