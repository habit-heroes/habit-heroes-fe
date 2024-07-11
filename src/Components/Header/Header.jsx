import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
        <h1>
          <Link to="/">Habit Hero</Link>
        </h1>
      </div>
      <nav className='header-nav'>
        <ul>
          {/* <li>
            <form className='search-form'>
              <input type='text' placeholder='search...' />
              <button type='submit'>find habits</button>
            </form>
          </li> */}
          {/* <li>All Habits</li> */}
          <li>
            <Link to="/tutorial">How it Works</Link>
          </li>
          {/* <li>
            <Link to="/">User Profile</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}