import React, { useState } from 'react';
import './style.css';

function TicTacToe() {
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');

  const choosingBox = ({ target: { id } }) => {
    switch (id) {
      case '1':
        setOne('X');
        break;
      case '2':
        setTwo('X');
        break;
      case '3':
        setThree('X');
        break;
      case '4':
        setFour('X');
        break;
      case '5':
        setFive('X');
        break;
      case '6':
        setSix('X');
        break;
      case '7':
        setSeven('X');
        break;
      case '8':
        setEight('X');
        break;
      case '9':
        setNine('X');
        break;
      default:
        '';
    }
  }

  return (
    <main className="main-container">
      <div className="game-container">
        <h1 className="game-title">TicTacToe</h1>
        <section className="box-conatiner">
            <button
              id="1"
              className="box"
              onClick={ (event) => choosingBox(event) }
            >
              { one }
            </button>
            <button
              id="2"
              className="box"
              onClick={ choosingBox }
            >
              { two }
            </button>
            <button
              id="3"
              className="box"
              onClick={ choosingBox }
            >
              { three }
            </button>
            <button
              id="4"
              className="box"
              onClick={ choosingBox }
            >
              { four }
            </button>
            <button
              id="5"
              className="box"
              onClick={ choosingBox }
            >
              { five }
            </button>
            <button
              id="6"
              className="box"
              onClick={ choosingBox }
            >
              { six }
            </button>
            <button
              id="7"
              className="box"
              onClick={ choosingBox }
            >
              { seven }
            </button>
            <button
              id="8"
              className="box"
              onClick={ choosingBox }
            >
              { eight }
            </button>
            <button
              id="9"
              className="box"
              onClick={ choosingBox }
            >
              { nine }
            </button>
        </section>
      </div>
    </main>
  )
}

export default TicTacToe;