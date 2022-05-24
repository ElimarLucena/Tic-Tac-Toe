import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function Login() {
  const navigate = useNavigate();
  return (
    <section className="conatiner-login">
      <div className="conatiner-title">
        <h1 className="title-login">Tic Tac Toe</h1>
        <h2>Lets Go!</h2>
      </div>
      <button
        type="button"
        className="button-login"
        onClick={ () =>  navigate('/tictactoe') }
      >
        Start
      </button>
    </section>
  )
}

export default Login;