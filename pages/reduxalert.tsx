import React from "react";
import { NextPage } from "next";
import { useAppDispatch, useAppState } from "../store/reduxState/store";
import { AddAlertAction } from "../store/reduxState/alertState";

const ValtioAlert: NextPage = () => {
  const { alerts } = useAppState();
  const dispatch = useAppDispatch();
  const addAlert = () => dispatch(AddAlertAction());

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
