import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "views/Home/Home.view";
import AboutView from "views/About/About.view";

const Routes: React.FC = () => {
  return (
    <div className='Routes'>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <HomeView />} />
          <Route exact path='/about' render={() => <AboutView />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
