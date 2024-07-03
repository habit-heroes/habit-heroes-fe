export default function Login() {
    return (
        <div className='login-page'>
            <h1 className='page-title'>Habit Hero</h1>
            <form>
                <input
                type='text'
                placeholder='Email'
                />
                <input
                type='text'
                placeholder='Password'
                />               
            </form>
        </div> 
    )
}