import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { NewPlaces } from "./Places/Pages/NewPlaces";
import { MainNavigation } from "./Shared/Component/Navigation/MainNavigation";
import { Users } from "./Users/Pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
      <Switch>
        <Route path="/" exact={true}>
          <Users></Users>
        </Route>
        <Route path="/places" exact={true}>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
