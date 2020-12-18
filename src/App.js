import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import ProjectInfo from './Components/Projects/Students Meet/StudentsMeet';
import PlanetHunters from './Components/Projects/Planet Hunters/PlanetHunters';
import Dashboard from './Components/Projects/3DP4ME/Dashboard';
import TRP from './Components/Projects/TRP/TRP';
import TDM from './Components/Projects/TDM/TDM';

import './styles/styles.scss';

function App() {
  return (
    <div className="root">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <div className="main-content">
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
