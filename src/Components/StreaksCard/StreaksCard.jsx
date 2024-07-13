import './StreaksCard.css'

export default function StreakCard({streak}){
    return(
        <div className='streak-card'>
            <h1 className='streak-title'>{streak.name}</h1>
            <h2 className='streak-duration'>Completed {streak.days_or_weeks_completed} Streaks</h2>
        </div>
    )
}