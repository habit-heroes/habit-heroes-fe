import './UserHabitCard.css'



export default function UserHabitCard() {
  return (
    <div className='user-habit-card'>
        <h1 className='habit-title'>Habit Title</h1>
        <h2 className='habit-category'>Habit Category</h2>
        <button className='habit-buttons'>Completed</button>
    </div>
  )
}
