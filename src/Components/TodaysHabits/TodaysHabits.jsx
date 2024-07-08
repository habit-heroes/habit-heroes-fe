import './TodaysHabits.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserHabits } from '../../app/userHabitsSlice';

export default function TodaysHabits() {
    const userHabits = useSelector((state) => state.userHabits.userHabits); 
    const loading = useSelector((state) => state.userHabits.loading);
    const error = useSelector((state) => state.userHabits.error);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUserHabits());
    }, [dispatch]);
  
    if (loading) {
      return <p>Loading habits...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
        <div className='todays-habits'>
            <ul className='suggested-habit-list'>
                <li>Habit 1</li>
                <li>Habit 2</li>
                <li>Habit 3</li>
                <li>Habit 4</li>
                <li>Habit 5</li>
            </ul>
        </div>
    )
}