import './UserHabitCard.css'
import { useState } from 'react'



export default function UserHabitCard({userHabit}) {
  const [counter, setCounter] = useState(0)
  console.log(userHabit, "USER HABIT SINGULAR")

  function incrementCounter() {
      setCounter((prevCounter) => {
        return prevCounter + 1
      })
  }
  console.log('COUNTER', counter)
  return (
    <div className='user-habit-card'>
        <h1 className='habit-title'>{userHabit.name}</h1>
        {/* <h2 className='habit-category'>{userHabit.category}</h2> */}
        <button className='habit-buttons' onClick={incrementCounter}>Done</button>
        <div className='counter'>
          <p className='times-done'>Times Done</p>
        <p className='count'>{counter}</p>
        </div>
    </div>
  )
}
