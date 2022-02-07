import React from 'react';
import DisplayPosts from './Components/Posts/DisplayPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>

      <Switch>
        <Route path='/' exact>
          <DisplayPosts />
        </Route>

        <Route path={`post/:id`}>
          <h1>this is for edit</h1>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
