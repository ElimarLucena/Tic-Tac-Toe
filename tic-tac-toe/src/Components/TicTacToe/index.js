import React from 'react';
import './style.css';

function TicTacToe() {
  return (
    <main className="main-container">
      <h1 className="game-title">TicTacToe</h1>
      <section className="game-conatiner">
          <button className="box 1">?</button>
          <button className="box 2">?</button>
          <button className="box 3">?</button>
          <button className="box 4">?</button>
          <button className="box 5">?</button>
          <button className="box 6">?</button>
          <button className="box 7">?</button>
          <button className="box 8">?</button>
          <button className="box 9">?</button>
      </section>
    </main>
  )
}

export default TicTacToe;