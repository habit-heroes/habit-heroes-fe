import Streaks from "../Streaks/Streaks"
import TodaysHabits from "../TodaysHabits/TodaysHabits"
import SuggestedHabits from "../SuggestedHabits/SuggestedHabits"
import './Home.css'

export default function Home() {
    const habits = [
        { title: 'Morning Run', category: 'Exercise' },
        { title: 'Read a Book', category: 'Personal Development' },
        { title: 'Meditate', category: 'Wellness' },
        { title: 'Work on Project', category: 'Work' },
        { title: 'Cook Dinner', category: 'Lifestyle' }
    ];

    return (
        <div className='home'>
            <Streaks />
            <TodaysHabits habits={habits}/>
            <SuggestedHabits />
        </div>
    )
}