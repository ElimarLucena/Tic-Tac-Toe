import React, { Component } from 'react';
import TicTacToe from './Components/TicTacToe';
import Provider from './Provider';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <TicTacToe />
      </Provider>
    );
  }
}

export default App;
