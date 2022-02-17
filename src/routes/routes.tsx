import React from "react";
import { HashRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import HomeView from "views/Home/Home.view";
import AboutView from "views/About/About.view";

const Routes: React.FC = () => {
  return (
    <div className='Routes'>
      <HashRouter>
        <ReactRoutes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
        </ReactRoutes>
      </HashRouter>
    </div>
  );
};

export default Routes;
