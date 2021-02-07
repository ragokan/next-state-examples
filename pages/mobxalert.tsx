import React from "react";
import { NextPage } from "next";
import { alertState } from "../store/mobxState/alertState";
import { observer } from "mobx-react";

const MobxAlert: NextPage = observer(() => {
  return (
    <div>
      <button className="btn btn-primary mb-3" type="button" onClick={() => alertState.addAlert()}>
        Add Alert
      </button>
      <ul className="list-group">
        {alertState.alerts.map((alert) => (
          <li className="list-group-item" key={alert.id}>
            {alert.text}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
});

export default MobxAlert;
