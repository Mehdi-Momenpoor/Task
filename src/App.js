import React from 'react';
import DisplayPosts from './Components/Posts/DisplayPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux"
import EditPost from './Components/Posts/EditPost';

function App() {

  const state = useSelector((state) => state)
  
  console.log(state);

  return (
    <Router>

      <Switch>
        <Route path='/' exact>
          <DisplayPosts />
        </Route>

        <Route path={`/edit`}>
          <EditPost />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
