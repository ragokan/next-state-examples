import React from "react";
import { NextPage } from "next";
import { useProxy } from "valtio";
import { addAlert, alertState } from "../store/valtioState/alertState";

const ValtioAlert: NextPage = () => {
  const { alerts } = useProxy(alertState);
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

export default ValtioAlert;
