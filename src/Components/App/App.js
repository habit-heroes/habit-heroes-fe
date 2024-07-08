import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Header from '../Header/Header'
import About from '../About/About';
import { useEffect } from 'react';
import { fetchUser } from '../../app/userSlice';
import { fetchUserHabits } from '../../app/userHabitsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchUserHabits(user.id));
    }
  }, [dispatch, user]);

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
