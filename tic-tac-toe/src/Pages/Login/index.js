import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <button
        type="button"
        onClick={ () =>  navigate('/tictactoe') }
      >
        Start
      </button>
    </section>
  )
}

export default Login;