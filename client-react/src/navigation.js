import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import NotePage from "./pages/note";
import CreatePage from './pages/create';
import UpdatePage from './pages/update';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={UpdatePage} />
        <Route path="/note/:id" component={NotePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Navigation;
