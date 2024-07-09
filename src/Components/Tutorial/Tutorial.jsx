import './Tutorial.css'

export default function Tutorial({ habits }){
    return (
        <div className='tutorial'>
            <div className='streaks-tutorial'>
                <ul className='streak-list-tutorial'>
                    <li>Streak 1</li>
                    <li>Streak 2</li>
                    <li>Streak 3</li>
                    <li>Streak 4</li>
                    <li>Streak 5</li>
                </ul>
            </div>
            <div className='todays-habits-tutorial'>
                <ul className='suggested-habit-list-tutorial'>
                    <div className='user-habit-card-tutorial'>
                        <h1 className='habit-title'>Title</h1>
                        <h2 className='habit-category'>Category</h2>
                        <button className='habit-buttons'>Done</button>
                    </div>
                </ul>
            </div>
            <div className='suggested-habits-tutorial'>
                <ul className='habit-list-tutorial'>
                    <li>Habit 1</li>
                    <li>Habit 2</li>
                    <li>Habit 3</li>
                    <li>Habit 4</li>
                    <li>Habit 5</li>
                </ul>
            </div>
        </div>
    )
}