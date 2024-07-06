import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <div className='header-left'>
                <h1>Habit Hero</h1>
            </div>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <form className='search-form'>
                            <input type='text' placeholder='search...'/>
                            <button type='submit'>find habits</button>
                        </form>
                    </li>
                    <li>all habits</li>
                    <li>how to use</li>
                    <li>user profile</li>
                    <li>about</li>
                </ul>
            </nav>
        </header>
    )
}