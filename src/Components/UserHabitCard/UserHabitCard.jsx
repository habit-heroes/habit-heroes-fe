import './UserHabitCard.css'



export default function UserHabitCard({userHabit}) {
  console.log(userHabit, "USER HABIT SINGULAR")
  
  return (
    <div className='user-habit-card'>
        <h1 className='habit-title'>{userHabit.name}</h1>
        {/* <h2 className='habit-category'>{userHabit.category}</h2> */}
        <button className='habit-buttons'>Done</button>
    </div>
  )
}
