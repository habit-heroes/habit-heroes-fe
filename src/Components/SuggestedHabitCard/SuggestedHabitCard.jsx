import './SuggestedHabitCard.css'
import { addUserHabit } from '../../app/userHabitsSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function UserHabitCard({habit}) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addUserHabit(1, habit.id))
  };

    return (
      <div className='suggested-habit-card'>
          <h1 className='habit-title'>{habit.name}</h1>
          <h2 className='habit-category'>{habit.category}</h2>
          <button className='habit-buttons' onClick={handleClick}>Add</button>
      </div>
    )
  }