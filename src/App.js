import React from "react";
import "./styles.css";
import Navi from "./components/navi";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Perpose from "./components/perpose";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navi />
        <Route path="/" exact={true} component={Home} />
        <Route path="/perpose" exact={true} component={Perpose} />
      </HashRouter>
    </div>
  );
}
