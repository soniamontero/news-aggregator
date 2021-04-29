import "./styles/app.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Four0Four from "./pages/404";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route component={Four0Four} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
