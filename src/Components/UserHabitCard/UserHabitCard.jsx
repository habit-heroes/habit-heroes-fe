import './UserHabitCard.css'



export default function UserHabitCard({habit}) {
  return (
    <div className='user-habit-card'>
        <h1 className='habit-title'>{habit.title}</h1>
        <h2 className='habit-category'>{habit.category}</h2>
        <button className='habit-buttons'>Done</button>
    </div>
  )
}
