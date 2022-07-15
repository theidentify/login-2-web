import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

const ALLOW_ENDPOINT = 'http://localhost:4002';

function Login({ onSubmit }) {
  const [error, setError] = useState(null);
  const webRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      if (username === 'abc' && password === '1234') {
        const message = {
          isLoggedIn: true,
          info: { username: 'abc', password: '1234' },
        };
        webRef.current.contentWindow.postMessage(message, ALLOW_ENDPOINT);
        setTimeout(() => {
          onSubmit(message);
        }, 0);
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
      <code>Login Web1</code>
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
      <iframe
        src={ALLOW_ENDPOINT}
        title='Web2'
        ref={webRef}
        width={500}
        height={500}
      />
    </header>
  );
}

export default Login;
