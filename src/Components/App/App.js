import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Error from '../Error/Error';
import About from '../About/About';
import Tutorial from '../Tutorial/Tutorial';
import { fetchUser } from '../../app/userSlice';
import { fetchUserHabits } from '../../app/userHabitsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  // const userHabits = useSelector((state) => state.userHabits.userHabits);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      dispatch(fetchUser(1));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(fetchUserHabits(user.id));
    }
  }, [dispatch, isLoggedIn, user]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    dispatch(fetchUser(1));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorial" element={isLoggedIn ? <Tutorial /> : <Navigate to="/login" />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
