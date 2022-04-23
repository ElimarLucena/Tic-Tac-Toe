import React, { useState, useEffect } from 'react';
import Context from './context';

function Provider({ children }) {
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');

  const [currPlayer, setCurrPlayer] = useState('X');

  const [win, setWin] = useState('');

  const choosingBox = ({ target: { id } }) => {
    switch (id) {
      case '1':
        if (one !== '') {
          return '';
        } else {
          setOne(currPlayer);
        }
        break;
      case '2':
        if (two !== '') {
          return '';
        } else {
          setTwo(currPlayer);
        }
        break;
      case '3':
        if (three !== '') {
          return '';
        } else {
          setThree(currPlayer);
        }
        break;
      case '4':
        if (four !== '') {
          return '';
        } else {
          setFour(currPlayer);
        }
        break;
      case '5':
        if (five !== '') {
          return '';
        } else {
          setFive(currPlayer);
        }
        break;
      case '6':
        if (six !== '') {
          return '';
        } else {
          setSix(currPlayer);
        }
        break;
      case '7':
        if (seven !== '') {
          return '';
        } else {
          setSeven(currPlayer);
        }
        break;
      case '8':
        if (eight !== '') {
          return '';
        } else {
          setEight(currPlayer);
        }
        break;
      case '9':
        if (nine !== '') {
          return '';
        } else {
          setNine(currPlayer);
        }
        break;
      default:
        '';
    }

    choosingCurrPlayer();
  }

  const choosingCurrPlayer = () => {
    if (currPlayer === "X") {
      setCurrPlayer('O');
    } else {
      setCurrPlayer("X");
    }
  }

  const checkingWinner = (firstBox, secondBox, thirdBox) => {
    if (firstBox !== '' && firstBox == secondBox && secondBox === thirdBox) {
      return true;
    };
  }

  useEffect(() => {
    // horizontal lines

    if (checkingWinner(one, two, three)) {
      setWin('win');
      return;
    }
    if (checkingWinner(four, five, six)) {
      setWin('win');
      return;
    }
    if (checkingWinner(seven, eight, nine)) {
      setWin('win');
      return;
    }

    // vertical lines

    if (checkingWinner(one, four, seven)) {
      setWin('win');
      return;
    }
    if (checkingWinner(two, five, eight)) {
      setWin('win');
      return;
    }
    if (checkingWinner(three, six, nine)) {
      setWin('win');
      return;
    }

    // transverse lines

    if (checkingWinner(one, five, nine)) {
      setWin('win');
      return;
    }
    if (checkingWinner(three, five, seven)) {
      setWin('win');
      return;
    }

  }, [one, two, three, four, five, six, seven, eight, nine,])

  const contextValues = {
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
  }
  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  )
}

export default Provider;