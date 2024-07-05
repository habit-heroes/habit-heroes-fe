import './Login.css'

export default function Login() {
    return (
        <div className='login-page'>
            <h1 className=''>User Login</h1>
            <form className='login-form'>
                <input className="login-input"
                type='text'
                placeholder='Email'
                />
                <input className="login-input"
                type='text'
                placeholder='Password'
                />               
            </form>
        </div> 
    )
}