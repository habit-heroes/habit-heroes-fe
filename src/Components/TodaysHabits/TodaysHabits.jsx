import React from 'react';
import UserHabitCard from '../UserHabitCard/UserHabitCard';
import './TodaysHabits.css';

export default function TodaysHabits({ habits }) {
    return (
        <div className='todays-habits'>
            <h1>Your Habits</h1>
            <ul className='suggested-habit-list'>
                {habits.map((habit, index) => (
                    <li key={index}>
                        <UserHabitCard habit={habit} />
                    </li>
                ))}
            </ul>
        </div>
    );
}