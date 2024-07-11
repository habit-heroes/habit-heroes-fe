import React, { useState } from 'react';
import './Tutorial.css';

export default function Tutorial() {
    const [habits, setHabits] = useState([]);
    const [streaks, setStreaks] = useState([]);
    const [suggestedHabits, setSuggestedHabits] = useState([
        { title: 'Title', category: 'Category' }
    ]);

    const addHabit = (index) => {
        const habitToAdd = suggestedHabits[index];
        setHabits([...habits, { ...habitToAdd, done: false }]);
        const newSuggestedHabits = suggestedHabits.filter((_, i) => i !== index);
        setSuggestedHabits(newSuggestedHabits);
    };

    const markHabitDone = (index) => {
        const newHabits = [...habits];
        newHabits[index].done = true;
        setHabits(newHabits);

        const newStreaks = [...streaks, { title: newHabits[index].title, duration: 3 }];
        setStreaks(newStreaks);
    };

    return (
        <div className='tutorial'>
            <div className='streaks-tutorial'>
                <h1>Streaks</h1>
                <ul className='streak-list-tutorial'>
                    {streaks.map((streak, index) => (
                        <li key={index} className='streak-tutorial-div'>
                            <h1 className='streak-title'>{streak.title}</h1>
                            <h2 className='streak-duration'>{streak.duration} days</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='todays-habits-tutorial'>
                <h1>Your Habits</h1>
                <ul className='suggested-habit-list-tutorial'>
                    {habits.map((habit, index) => (
                        <li key={index} className='user-habit-card-tutorial'>
                            <h1 className='habit-title'>{habit.title}</h1>
                            <h2 className='habit-category'>{habit.category}</h2>
                            {!habit.done && <button className='habit-buttons' onClick={() => markHabitDone(index)}>Done</button>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='suggested-habits-tutorial'>
                <h1>Suggested Habits</h1>
                <ul className='habit-list-tutorial'>
                    {suggestedHabits.map((habit, index) => (
                        <li key={index} className='suggested-habit-card'>
                            <h1 className='habit-title'>{habit.title}</h1>
                            <h2 className='habit-category'>{habit.category}</h2>
                            <button className='habit-buttons' onClick={() => addHabit(index)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}