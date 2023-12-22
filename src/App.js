import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Home/>
    </div>
  );
}

export default App;
