import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleSignIn from './components/GoogleSignIn';

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    alert(`Created a User Profile for ${emailRef.current.value} with password ${passwordRef.current.value}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <div id="firebase-auth">
          <h2>Sign In</h2>
          <input type="email" id="email" placeholder="Email" ref={emailRef}/>
          <input type="password" id="password" placeholder="Password" ref={passwordRef}/>
          <button onClick={handleSubmit}>Sign In</button>
          <div id="error-message"></div>
        </div> */}
        <GoogleSignIn/>
      </header>
    </div>
  );
}

export default App;
