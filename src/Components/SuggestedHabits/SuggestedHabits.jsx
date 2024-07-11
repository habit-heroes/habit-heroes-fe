import './SuggestedHabits.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabits } from '../../app/habitsSlice';
import SuggestedHabitCard from '../SuggestedHabitCard/SuggestedHabitCard';

export default function SuggestedHabits() {
  const habits = useSelector((state) => state.habits.habits); 
  const userHabits = useSelector((state) => state.userHabits.userHabits); 
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

  const suggestedHabitsToDisplay = habits.data.reduce((habitsDisplayed, habit) => {
    const isHabitInUserHabits = userHabits.data.some((userHabit) => habit.name === userHabit.name);
    if (!isHabitInUserHabits) {
        habitsDisplayed.push(habit);
    }
    return habitsDisplayed;
}, []);

    return (
        <div className='suggested-habits'>
            <h1>Suggested Habits</h1>
            <ul className='habit-list'>
                {suggestedHabitsToDisplay.map((habit, index) => (
                    <li key={index}>
                        <SuggestedHabitCard habit={habit} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

