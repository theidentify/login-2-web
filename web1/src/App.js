import { useState } from 'react';
import About from './About';
import Login from './Login';

function App() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const [isLoggedIn, setIsLoggedIn] = useState(profile?.isLoggedIn);

  const persistLogin = ({ isLoggedIn, info }) => {
    setIsLoggedIn(isLoggedIn);
    localStorage.setItem('profile', JSON.stringify({ isLoggedIn, info }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('profile');
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
