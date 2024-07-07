import './SuggestedHabits.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabits } from '../../app/habitsSlice';

export default function SuggestedHabits() {
  const habits = useSelector((state) => state.habits.habits); //this is where all the habits are acessed. This is the global state
  const loading = useSelector((state) => state.habits.loading);
  const error = useSelector((state) => state.habits.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  if (loading) {
    return <p>Loading habits...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  //const allHabits = habits.map(habit => {
// return (
//    <HabitCard
//      key={habit.id}
//      id={habit.id}
//      title={habit.title}
//      etc......
//      )})
    return (
        <div className='suggested-habits'>
            <ul className='habit-list'>
                {/* {allHabits} */}
                <li>Habit 1</li>
                <li>Habit 2</li>
                <li>Habit 3</li>
                <li>Habit 4</li>
                <li>Habit 5</li>
            </ul>
        </div>
    )
}