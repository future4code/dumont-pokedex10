import React, { useContext } from "react";
import Router from "./routes/Router";
import GlobalState from './Components/global/GlobalState';
import GlobalStateContext from "./Components/global/GlobalStateContext";
// import Home from './Components/Home/Home'
function App() {
  
  // const [listaPokemons] = useContext(GlobalStateContext);
  // console.log('wsdw')
  return (
    <div className="App">
      {/* evitar dar push com elementos nessa area */}
      {/* <PokeStats/>
      <PokeImage/> */}
        <GlobalState>
      <Router />
      
    </GlobalState>
    {/* <Home /> */}
    </div>
  );
}

export default App;
