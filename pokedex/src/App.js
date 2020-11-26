import React, { useContext } from "react";
import Router from "./routes/Router";
import GlobalState from './Components/global/GlobalState';
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">

    <GlobalState>
      <Router />
      
    </GlobalState>
   
    </div>
  );
}

export default App;
