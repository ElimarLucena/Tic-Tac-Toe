import React, { useContext } from 'react';
import Context from '../../Provider/context';
import './style.css';

function TicTacToe() {
  const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    choosingBox,
  } = useContext(Context);

  return (
    <main className="main-container">
      <div className="game-container">
        <h1 className="game-title">TicTacToe</h1>
        <section className="box-conatiner">
            <button
              id="1"
              className={ `box ${one}` }
              onClick={ (event) => choosingBox(event) }
            >
              { one }
            </button>
            <button
              id="2"
              className={ `box ${two}` }
              onClick={ (event) => choosingBox(event) }
            >
              { two }
            </button>
            <button
              id="3"
              className={ `box ${three}` }
              onClick={ (event) => choosingBox(event) }
            >
              { three }
            </button>
            <button
              id="4"
              className={ `box ${four}` }
              onClick={ (event) => choosingBox(event) }
            >
              { four }
            </button>
            <button
              id="5"
              className={ `box ${five}` }
              onClick={ (event) => choosingBox(event) }
            >
              { five }
            </button>
            <button
              id="6"
              className={ `box ${six}` }
              onClick={ (event) => choosingBox(event) }
            >
              { six }
            </button>
            <button
              id="7"
              className={ `box ${seven}` }
              onClick={ (event) => choosingBox(event) }
            >
              { seven }
            </button>
            <button
              id="8"
              className={ `box ${eight}` }
              onClick={ (event) => choosingBox(event) }
            >
              { eight }
            </button>
            <button
              id="9"
              className={ `box ${nine}` }
              onClick={ (event) => choosingBox(event) }
            >
              { nine }
            </button>
        </section>
      </div>
    </main>
  )
}

export default TicTacToe;