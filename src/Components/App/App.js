import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Header from '../Header/Header'
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Home />
      <About />
    </div>
  );
}

export default App;
