import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"
import './Home.css'

export default function Home() {
    
    const streaks = [
        {title: 'brush teeth', streak: '4 days'},
        {title: 'drink water', streak: '16 days'}
    ]

    return (
        <div className='home'>
            <Streaks streaks={streaks}/>
            <TodaysHabits />
            <SuggestedHabits />
        </div>
    )
}