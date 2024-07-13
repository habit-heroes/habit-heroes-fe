import './UserHabitCard.css';
import { useState } from 'react';

export default function UserHabitCard({ userHabit }) {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className='user-habit-card'>
      <h1 className='habit-title'>{userHabit.name}</h1>
      {/* Uncomment if the category is needed */}
      {/* <h2 className='habit-category'>{userHabit.category}</h2> */}
      <button className='habit-buttons' onClick={incrementCounter}>Done</button>
      <div className='counter'>
        <p className='times-done'>Times Done</p>
        <p className='count'>{counter}</p>
      </div>
    </div>
  );
}
