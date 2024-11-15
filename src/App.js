import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Demo from './Page Components/Demo';
import MyNavbar from './Page Components/Navbar';
import LoginForm from './Page Components/LoginForm';
import RegisterForm from './Page Components/ResisterForm';
import SimpleTable from './Page Components/SimpleTable';
import CardGrid from './Page Components/CardGrid';
import Footer from './Page Components/Footer';

function App() {

  // const [showLogin, setShowLogin] = useState(false);
  // const toggleLoginForm = () => setShowLogin(!showLogin);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Toggle the Login Form visibility
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); // Hide Register form when Login form is opened
  };

  // Toggle the Register Form visibility
  const toggleRegisterForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(false); // Hide Login form when Register form is opened
  };

  return (

    <div className="App">

      {/* <MyNavbar onLoginClick={toggleLoginForm} /> */}

      {/* {showLogin && <LoginForm />} */}

      {/* <RegisterForm/> */}

      {/* <MyNavbar /> */}
      {/* <LoginForm /> */}

      <MyNavbar
        onLoginClick={toggleLoginForm}
        onRegisterClick={toggleRegisterForm}
      />

      {showLogin && <LoginForm />}
      {showRegister && <RegisterForm />}

      <SimpleTable/>
      <CardGrid/>
      <Footer/>

      <h1>This is App js file</h1>
      <Demo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
