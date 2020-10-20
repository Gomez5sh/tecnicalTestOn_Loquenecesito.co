import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutApp } from "../components/About/AboutApp";
import { HomeApp } from "../components/Home/HomeApp";
import { StackApp } from "../components/Stack/StackApp";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomeApp} />
          <Route exact path="/about" component={AboutApp} />
          <Route exact path="/stack" component={StackApp} />
        </Switch>
      </div>
    </Router>
  );
};
