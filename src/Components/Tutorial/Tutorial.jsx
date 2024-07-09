import './Tutorial.css'

export default function Tutorial(){
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
                    <li>Habit 1</li>
                    <li>Habit 2</li>
                    <li>Habit 3</li>
                    <li>Habit 4</li>
                    <li>Habit 5</li>
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