import './SuggestedHabits.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabits } from '../../app/habitsSlice';
import SuggestedHabitCard from '../SuggestedHabitCard/SuggestedHabitCard';

export default function SuggestedHabits() {
  const habits = useSelector((state) => state.habits.habits); // Access global state
  const loading = useSelector((state) => state.habits.loading);
  const error = useSelector((state) => state.habits.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  if (loading) {
    return <p>Loading habits...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Ensure habits are defined and check if it has the expected structure
  if (!habits || !habits.data) {
    return <p>No habits found</p>;
  }

  return (
    <div className='suggested-habits'>
      <h1>Suggested Habits</h1>
      <ul className='habit-list'>
        {habits.data.map((habit, index) => (
          <li key={index}>
            <SuggestedHabitCard habit={habit} />
          </li>
        ))}
      </ul>
    </div>
  );
}
