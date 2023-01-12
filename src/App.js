import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { NewPlaces } from "./Places/Pages/NewPlaces";
import { Users } from "./Users/Pages/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
       <Users></Users>
        </Route>
        <Route path="/places" exact={true}>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
