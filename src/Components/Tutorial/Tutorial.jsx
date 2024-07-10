import './Tutorial.css'

export default function Tutorial() {
    return (
        <div className='tutorial'>
            <div className='streaks-tutorial'>
                <ul className='streak-list-tutorial'>
                    <li className='streak-tutorial-div'>
                        <h1 className='streak-title'>brush teeth</h1>
                        <h2 className='streak-duration'>16 days</h2>
                    </li>
                </ul>
            </div>
            <div className='todays-habits-tutorial'>
                <ul className='suggested-habit-list-tutorial'>
                    <li className='user-habit-card-tutorial'>
                        <h1 className='habit-title'>title</h1>
                        <h2 className='habit-category'>Category</h2>
                        <button className='habit-buttons'>Done</button>
                    </li>
                </ul>
            </div>
            <div className='suggested-habits-tutorial'>
                <ul className='habit-list-tutorial'>
                    <li className='suggested-habit-card'>
                        <h1 className='habit-title'>Title</h1>
                        <h2 className='habit-category'>Category</h2>
                        <button className='habit-buttons'>Add</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}