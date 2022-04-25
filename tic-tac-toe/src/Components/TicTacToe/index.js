import React, { useContext } from 'react';
import Context from '../../Provider/context';
import Button from '../Button';
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
    currPlayer,
    win,
    disabled,
    tryAgain,
    choosingBox,
    playAgain,
  } = useContext(Context);

  return (
    <main className="main-container">
      <div className="game-container">
        <h1 className="game-title">TicTacToe</h1>
        <section className="box-conatiner">
            <button
              id="1"
              className={ `box ${one}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { one }
            </button>
            <button
              id="2"
              className={ `box ${two}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { two }
            </button>
            <button
              id="3"
              className={ `box ${three}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { three }
            </button>
            <button
              id="4"
              className={ `box ${four}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { four }
            </button>
            <button
              id="5"
              className={ `box ${five}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { five }
            </button>
            <button
              id="6"
              className={ `box ${six}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { six }
            </button>
            <button
              id="7"
              className={ `box ${seven}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { seven }
            </button>
            <button
              id="8"
              className={ `box ${eight}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { eight }
            </button>
            <button
              id="9"
              className={ `box ${nine}` }
              disabled={ disabled }
              onClick={ (event) => choosingBox(event) }
            >
              { nine }
            </button>
        </section>
      </div>
      {
        win !== '' ? (
          <div className="winner-again">
            <h1 className="winner">Winner: <span>{ win }</span></h1>
            <Button />
          </div>
        ) : (
          <div>
            {
              tryAgain === 9 ? (
                <div className="winner-again">
                  <h1 className="try-again">Sorry, Try Again!</h1>
                  <Button />
                </div>
              ) : (
                <div className="winner-again">
                  <h1 className="currPlayer">Current Player: <span>{ currPlayer }</span></h1> 
                  <button
                    type="button"
                    className="restart"
                    onClick={ () => playAgain() }
                  >
                    Restart
                  </button>
                </div>
              )
            }
          </div> 
        )
      }
    </main>
  )
}

export default TicTacToe;