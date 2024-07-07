import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits />
            <SuggestedHabits />
        </div>
    )
}