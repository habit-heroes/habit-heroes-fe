import './SuggestedHabits.css'
import React from 'react'
import SuggestedHabitCard from '../SuggestedHabitCard/SuggestedHabitCard'

export default function SuggestedHabits({ habits }) {
    return (
        <div className='suggested-habits'>
            <h1>Suggested Habits</h1>
            <ul className='habit-list'>
                {habits.map((habit, index) => (
                    <li key={index}>
                        <SuggestedHabitCard habit={habit} />
                    </li>
                ))}
            </ul>
        </div>
    )
}