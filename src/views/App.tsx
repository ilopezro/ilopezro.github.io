import React from "react";
import Navbar from "components/Navbar";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      Welcome to my site!
      <div>This is currently a work in progress</div>
    </div>
  );
};

export default App;
