import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"

export default function Home() {
    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits />
            <SuggestedHabits />
        </div>
    )
}