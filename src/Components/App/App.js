import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Header from '../Header/Header'
import About from '../About/About';
// import UserHabitCard from '../UserHabitCard/UserHabitCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <UserHabitCard /> */}
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;