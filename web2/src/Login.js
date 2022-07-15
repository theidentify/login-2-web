import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Login({ onSubmit }) {
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      if (username === 'abc' && password === '1234') {
        onSubmit({
          isLoggedIn: true,
          info: { username: 'abc', password: '1234' },
        });
      } else {
        setError('Incorrect username or password');
        setTimeout(() => {
          setError(null);
        }, 5 * 1000);
      }
    }
  }

  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <code>Login Web2</code>
      <form onSubmit={handleSubmit} className='form-control'>
        <label>Username</label>
        <input name='username' className='form-input' required />
        <label>Password</label>
        <input
          name='password'
          type='password'
          className='form-input'
          required
        />
        <p className='form-errormsg'>{error}&nbsp;</p>
        <button type='submit' className='form-submitbtn'>
          Press & Go&nbsp;&rarr;
        </button>
      </form>
    </header>
  );
}

export default Login;
