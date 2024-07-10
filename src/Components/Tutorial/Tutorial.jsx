import './Tutorial.css'

export default function Tutorial({ habits }){
    return (
        <div className='tutorial'>
            <div className='streaks-tutorial'>
                <ul className='streak-list-tutorial'>
                    <li>no streaks at this time</li>
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
                    <div className='suggested-habit-card'>
                        <h1 className='habit-title'>Title</h1>
                        <h2 className='habit-category'>Category</h2>
                        <button className='habit-buttons'>Add</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}