import React from 'react';
import { useNavigate } from "react-router-dom";
// import Animation from '../../Components/animation';
import './style.css'

function Login() {
  const navigate = useNavigate();
  return (
    <section className="conatiner-login">
      {/* <div className="animation-login">
        <Animation />
      </div> */}
      <h1 className="title-login">Tic Tac Toe</h1>
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