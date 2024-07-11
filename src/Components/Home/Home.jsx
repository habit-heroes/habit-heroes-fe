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

    const streaks = [
        {title: 'brush teeth', streak: '4 days'},
        {title: 'drink water', streak: '16 days'}
    ]

    return (
        <div className='home'>
            <Streaks streaks={streaks}/>
            <TodaysHabits habits={habits}/>
            <SuggestedHabits habits={habits}/>
        </div>
    )
}