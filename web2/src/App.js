import { useState, useEffect } from 'react';
import About from './About';
import Login from './Login';

const ALLOW_ENDPOINT = 'http://localhost:4001';
function App() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const [isLoggedIn, setIsLoggedIn] = useState(profile?.isLoggedIn);

  useEffect(() => {
    function handleEvent(event) {
      if (event?.origin === ALLOW_ENDPOINT) {
        if (event?.data) {
          persistLogin(event?.data);
        } else {
          logout();
        }
      }
    }

    window.addEventListener('message', handleEvent, false);
    return () => {
      window.removeEventListener('message', handleEvent);
    };
  }, []);

  const persistLogin = ({ isLoggedIn, info }) => {
    setIsLoggedIn(isLoggedIn);
    localStorage.setItem('profile', JSON.stringify({ isLoggedIn, info }));
  };

  const logout = () => {
    localStorage.removeItem('profile');
    setIsLoggedIn(false);
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <About info={profile?.info} onLogout={logout} />
      ) : (
        <Login onSubmit={persistLogin} />
      )}
    </div>
  );
}

export default App;
