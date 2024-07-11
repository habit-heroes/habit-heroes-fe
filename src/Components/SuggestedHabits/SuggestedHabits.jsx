import './SuggestedHabits.css'
import React from 'react'
import SuggestedHabitCard from '../SuggestedHabitCard/SuggestedHabitCard'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabits } from '../../app/habitsSlice';
import { addUserHabit } from '../../app/userHabitsSlice';


export default function SuggestedHabits() {



// export default function SuggestedHabits() { 
  // will need to refactor once merged 
  const habits = useSelector((state) => state.habits.habits); //this is where all the habits are acessed. This is the global state
  const loading = useSelector((state) => state.habits.loading);
  const error = useSelector((state) => state.habits.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

console.log('habits', habits)

  if (loading) {
    return <p>Loading habits...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  //const allHabits = habits.map(habit => {
// return (
//    <HabitCard
//      key={habit.id}
//      id={habit.id}
//      title={habit.title}
//      etc......
//      )})
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
    )
}