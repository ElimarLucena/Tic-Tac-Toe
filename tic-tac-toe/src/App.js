import React, { Component } from 'react';
import Roads from './Routes';
import Provider from './Provider';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Roads />
      </Provider>
    );
  }
}

export default App;
