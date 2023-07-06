import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import {App} from './App';
import "bootstrap/dist/css/bootstrap.min.css"
// import {Bootstrapinfo} from "./components/BootstrapInfo";
import {BootstrapCard} from "./components/Bootstrap.card"


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <>
    <BootstrapCard/>
    {/* <App/> */}
  </>
);
