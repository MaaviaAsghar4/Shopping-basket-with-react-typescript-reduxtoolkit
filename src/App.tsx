import React from "react";
import "./App.css";
import Navigation from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Config/Routing";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
