import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import ProjectInfo from './Components/Students Meet/StudentsMeet';
import PlanetHunters from './Components/Planet Hunters/PlanetHunters';
import Dashboard from './Components/3DP4ME/Dashboard';
import TRP from './Components/TRP/TRP';
import TDM from './Components/TDM/TDM';

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
            <Route exact path="/studentsmeet">
              <ProjectInfo />
            </Route>
            <Route exact path="/planethunters">
              <PlanetHunters />
            </Route>
            <Route exact path="/3dp4me">
              <Dashboard />
            </Route>
            <Route exact path="/trp">
              <TRP />
            </Route>
            <Route exact path="/tdm">
              <TDM />
            </Route>
            
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
