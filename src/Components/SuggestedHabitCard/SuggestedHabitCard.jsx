import './SuggestedHabitCard.css'

export default function UserHabitCard({habit}) {
    return (
      <div className='suggested-habit-card'>
          <h1 className='habit-title'>{habit.name}</h1>
          <h2 className='habit-category'>{habit.category}</h2>
          <button className='habit-buttons'>Add</button>
      </div>
    )
  }