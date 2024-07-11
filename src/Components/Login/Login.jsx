import './Login.css';
import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hardCodedUser = {
    email: 'dummy@gmail.com',
    password: 'dummy123'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === hardCodedUser.email && password === hardCodedUser.password) {
      onLogin(); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login-page'>
      <h1>User Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <input
          className='login-input'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='login-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='login-button'>Login</button>
      </form>
    </div>
  );
}