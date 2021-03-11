import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Field from './components/Field/Field';
import Mismatch from './components/Mismatch/Mismatch';
import TeamInfo from './components/TeamInfo/TeamInfo';

function App() {

  return (

    <Router>
      <Switch>
        <Route path="/home">
          <Field></Field>
        </Route>
        <Route path="/details/:teamId">
          <TeamInfo></TeamInfo>
        </Route>
        <Route exact path="/">
          <Field></Field>
        </Route>
        <Route path="*">
          <Mismatch></Mismatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
