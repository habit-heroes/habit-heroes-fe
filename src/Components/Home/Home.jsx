import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"
import './Home.css'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUserStreaks } from "../../app/streaksSlice"

export default function Home() {
//     const streaks = useSelector((state) => state.streaks.streaks)
//     const user = useSelector((state) => state.user.user);
//     const dispatch = useDispatch()
// console.log('STREAKS', streaks)

//     useEffect(() => {
//         dispatch(fetchUserStreaks(user.id))
//     }, [dispatch])
    // const streaks = [
    //     {
    //         id: 1,
    //         name: "Brush Teeth",
    //         category: "dental",
    //         goal_type: "day",
    //         streak_type: "fire",
    //         days_or_weeks_completed: 10
    //       },
    //       {
    //         id: 2,
    //         name: "Floss Teeth",
    //         category: "dental",
    //         goal_type: "day",
    //         streak_type: "fire",
    //         days_or_weeks_completed: 10
    //       }
    // ]

    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits />
            <SuggestedHabits />
        </div>
    )
}