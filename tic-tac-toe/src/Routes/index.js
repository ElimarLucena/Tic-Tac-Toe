import React from 'react';
import Login from '../Pages/Login';
import TicTacToe from '../Pages/TicTacToe';
import { Route, Routes } from 'react-router-dom'

function Roads() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/tictactoe" element={ <TicTacToe /> } />
    </Routes> 
  )
}

export default Roads;