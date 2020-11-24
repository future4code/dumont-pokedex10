import logo from './logo.svg';
import './App.css';
import PokeImage from './Components/PokeDetalis/PokeImage';
import PokeStats from './Components/PokeDetalis/PokeStats';


function App() {
  return (
    <div className="App">
      {/* evitar dar push com elementos nessa area */}
      <PokeStats/>
      <PokeImage/>
    </div>
  );
}

export default App;
