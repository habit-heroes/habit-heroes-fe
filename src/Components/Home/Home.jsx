import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"
import './Home.css'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUserStreaks } from "../../app/streaksSlice"

export default function Home() {
    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits />
            <SuggestedHabits />
        </div>
    )
}