import React from "react";
import Home from "./Pages/Home";
import Sidenav from "./Pages/Sidenav";

function App() {
  return (
    <div className="App" id="Home">
      <Sidenav />
      <Home />
    </div>
  );
}

export default App;
