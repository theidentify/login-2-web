import { useRef } from 'react';

const ALLOW_ENDPOINT = 'http://localhost:4002';
function About({ info, onLogout }) {
  const webRef = useRef(null);

  const logout = () => {
    webRef.current.contentWindow.postMessage(null, ALLOW_ENDPOINT);
    setTimeout(() => {
      onLogout();
    }, 0)
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <h1>About</h1>
      <p>Here I am {info?.username} </p>
      <img
        src='https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif'
        alt='slot-laugh'
      />

      <iframe
        src={ALLOW_ENDPOINT}
        title='Web2'
        ref={webRef}
        width={500}
        height={500}
      />
    </>
  );
}

export default About;
