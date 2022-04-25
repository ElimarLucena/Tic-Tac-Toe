import React, { useContext } from 'react';
import Context from '../../Provider/context';
import './style.css';

function Button() {
  const { playAgain } = useContext(Context);

  return (
    <button
      type="button"
      className="play-again"
      onClick={ () => playAgain() }
    >
      Play Again
    </button>
  )
}

export default Button;