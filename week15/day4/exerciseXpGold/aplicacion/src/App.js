import React from "react";
import { planets } from "./components/list-group";
import './App.css'

export const App = () => {
  return (
    <div className="container">
      {planets.map(( planet, i) => (
        <h1 key={i} className="individual">{planet}</h1>
      ))}
    </div>
  );
};
