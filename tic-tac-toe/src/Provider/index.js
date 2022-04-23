import React, { useState } from 'react';
import Context from './context';

function Provider({ children }) {
  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  )
}

export default Provider;