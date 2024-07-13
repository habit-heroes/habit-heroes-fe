import './UserHabitCard.css';
import { useState } from 'react';
import { fetchUserHabits } from '../../app/userHabitsSlice';
import { fetchUserStreaks, updateUserHabit } from '../../app/streaksSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UserHabitCard({ userHabit }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);

  function handleDoneClick() {
    updateUserHabit(user.id, userHabit.id);
    dispatch(fetchUserStreaks(user.id))
  }

  return (
    <div className='user-habit-card'>
      <h1 className='habit-title'>{userHabit.name}</h1>
      {/* Uncomment if the category is needed */}
      {/* <h2 className='habit-category'>{userHabit.category}</h2> */}
      <button className='habit-buttons' onClick={handleDoneClick}>Done</button>
    </div>
  );
}
