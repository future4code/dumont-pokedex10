import logo from './logo.svg';
import './App.css';
import PokeCard from './Components/PokeCard/PokeCard';
import PokeImage from './Components/PokeDetalis/PokeImage';

function App() {
  return (
    <div className="App">
      {/* evitar dar push com elementos nessa area */}
     <PokeImage/>
    </div>
  );
}

export default App;
