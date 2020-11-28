import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./app/components/home/home";
import NotFound from "./app/components/notFound/notFound";
import Simple from './Components/Simple/simple';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="" component={Simple} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
