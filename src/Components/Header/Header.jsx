import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, onLogout }) {
  return (
    <header className='header'>
      <div className='header-left'>
        <h1>
          <Link to="/">Habit Hero</Link>
        </h1>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to="/tutorial">How it Works</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isLoggedIn && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
