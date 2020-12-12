import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';

import './styles/styles.scss';

function App() {
  return (
    <div className="root">
      <Router>
        <Navbar />
        <Switch>
          <div className="content">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
