import React from "react";
import "../App.css";
import { Card } from "../Card/card";

export const CardList = ({ citiesList, dispatch }) => (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card key={city} city={city} dispatch={dispatch} />
    ))}
  </div>
);
