function About({ info, onLogout }) {
  return (
    <>
      <button onClick={onLogout}>Logout</button>
      <h1>About</h1>
      <p>Here I am {info?.username}</p>
      <img
        src='https://media.giphy.com/media/peyVb4uDSSAZ9Y2fg9/giphy.gif'
        alt='slot-laugh'
      />
    </>
  );
}

export default About;
