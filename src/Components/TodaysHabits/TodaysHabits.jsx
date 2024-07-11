
import React from 'react';
import UserHabitCard from '../UserHabitCard/UserHabitCard';
import './TodaysHabits.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserHabits } from '../../app/userHabitsSlice';

export default function TodaysHabits() {



// export default function TodaysHabits() {
  // will need to refactor once merged 
    const userHabits = useSelector((state) => state.userHabits.userHabits); 
    const loading = useSelector((state) => state.userHabits.loading);
    const error = useSelector((state) => state.userHabits.error);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUserHabits());
    }, [dispatch]);
  
    console.log(userHabits, 'USER HABITS')

    if (loading) {
      return <p>Loading habits...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
        <div className='todays-habits'>
            <h1>Your Habits</h1>
            <ul className='suggested-habit-list'>
                {userHabits.data.map((userHabit, index) => (
                    <li key={index}>
                        <UserHabitCard userHabit={userHabit} />
                    </li>
                ))}
            </ul>
        </div>
    );
}