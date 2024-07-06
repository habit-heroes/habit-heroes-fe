import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"

export default function Home() {
    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits />
        </div>
    )
}