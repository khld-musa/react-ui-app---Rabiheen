import React from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import Shop from "./pages/Shop";
import "./App.css";
import "./pages/assets/css/style.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Shop} />
      </Switch>
    </Router>
  );
}
