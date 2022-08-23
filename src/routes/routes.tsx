import { Fragment, FunctionComponent } from "react";
import { HashRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import HomeView from "views/Home/Home.view";
import AboutView from "views/About/About.view";

const Routes: FunctionComponent = () => {
  return (
    <Fragment>
      <HashRouter>
        <ReactRoutes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
        </ReactRoutes>
      </HashRouter>
    </Fragment>
  );
};

export default Routes;
