import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Photos from "./Photos/Photos";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/photos/:sol/:camera" component={Photos} />
      {/* Comment to the rule*/}
    </div>
  );
}

export default App;
