import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

import './App.css';

function App() {
  return (
    <div className="root">
      <Router>
        <Navbar  />
          <Switch>
            <div className="content">
              {/* Path = BASE_URL */}
              <Route exact path="/">
                <Home />
              </Route>
            </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
