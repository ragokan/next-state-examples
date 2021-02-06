import React from "react";
import Link from "next/link";

const stores = ["mobx", "redux", "valtio", "zustand"];

const NextApp: React.FC = () => {
  return (
    <div>
      <h1>Visit Stores</h1>

      {stores.map((store) => (
        <div key={store}>
          <Link href={`/${store}`}>
            <a style={{ textTransform: "capitalize" }}>{store}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NextApp;
