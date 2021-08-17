import React from "react";
import Header from "./components/Header.js";
import Store from "./pages/Store.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
