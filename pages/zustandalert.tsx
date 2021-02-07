import React from "react";
import { NextPage } from "next";
import { alertState } from "../store/zustandState/alertState";

const ZustandAlert: NextPage = () => {
  const { alerts, addAlert } = alertState();
  return (
    <div>
      <button className="btn btn-primary mb-3" type="button" onClick={addAlert}>
        Add Alert
      </button>
      <ul className="list-group">
        {alerts.map((alert) => (
          <li className="list-group-item" key={alert.id}>
            {alert.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZustandAlert;
