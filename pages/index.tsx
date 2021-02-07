import React from "react";
import Link from "next/link";

const stores = ["mobx", "redux", "valtio", "zustand", "mobxalert", "reduxalert", "valtioalert", "zustandalert"];

const NextApp: React.FC = () => {
  return (
    <div>
      <h1>Visit Stores</h1>
      <ul className="list-group">
        {stores.map((store) => (
          <li className="list-group-item" key={store}>
            <Link href={`/${store}`}>
              <a style={{ textTransform: "capitalize" }}>{store}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextApp;
