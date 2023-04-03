import React from 'react';
import './App.css';

var isLoggedIn = true;

function App() {
  return (
    <div className='container'>
      if(isLoggedIn === true){
        <h1>Hello</h1>
      }else{
        <form className = "form">
        <input type='text' placeholder='Username'/>
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
      }
    </div>
  );
}

export default App;
