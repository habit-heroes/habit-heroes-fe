import './StreaksCard.css'

export default function StreakCard({streak}){
    return(
        <div className='streak-card'>
            <h1 className='streak-title'>{streak.title}</h1>
            <h2 className='streak-duration'>{streak.streak}</h2>
        </div>
    )
}