import React, { useContext } from "react";
import { GlobalContext } from "../App";
import "../App.css";
import { Card } from "../Card/card";

export const CardList = () => {
  const {
    state: { citiesList },
  } = useContext(GlobalContext);
  return (
    <div className="CardList">
      {citiesList.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
};
