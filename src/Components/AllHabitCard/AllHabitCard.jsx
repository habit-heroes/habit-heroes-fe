import './AllHabitCard.css'
import '../UserHabitCard/UserHabitCard.css'

export default function AllHabitCard() {
    return (
        <div className='all-habit-card'>
        <h1 className='habit-title'>Habit Title</h1>
        <h2 className='habit-category'>Habit Category</h2>
        <button className='habit-buttons'>Add Habit</button>
    </div>
    )
}