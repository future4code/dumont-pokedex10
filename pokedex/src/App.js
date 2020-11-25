import logo from './logo.svg';
import './App.css';
import CardPokemon from './CardPokemon/CardPokemon';
import PokeImage from './Components/PokeDetalis/PokeImage';
import PokeStats from './Components/PokeDetalis/PokeStats';




function App() {
  return (
    <div className="App">
      {/* evitar dar push com elementos nessa area */}
      {/* <PokeStats/>
      <PokeImage/> */}
      <CardPokemon/>
    
    </div>
  );
}

export default App;
