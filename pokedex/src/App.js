import logo from './logo.svg';
import './App.css';
import Header from '../src/hearder/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      {/* evitar dar push com elementos nessa area */}
    </div>
  );
}

export default App;
