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

  const [disabled, setDisabled] = useState(false);

  const [tryAgain, setTryAgain] = useState(0);

  const [oneColor, setOneColor] = useState('');
  const [twoColor, setTwoColor] = useState('');
  const [threeColor, setThreeColor] = useState('');
  const [fourColor, setFourColor] = useState('');
  const [fiveColor, setFiveColor] = useState('');
  const [sixColor, setSixColor] = useState('');
  const [sevenColor, setSevenColor] = useState('');
  const [eightColor, setEightColor] = useState('');
  const [nineColor, setNineColor] = useState('');

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
    if (firstBox !== '' && firstBox === secondBox && secondBox === thirdBox) {
      return true;
    };
  }

  useEffect(() => {
    // horizontal lines

    if (checkingWinner(one, two, three)) {
      setWin(one);
      setOneColor('box-win');
      setTwoColor('box-win');
      setThreeColor('box-win');
      return;
    }
    if (checkingWinner(four, five, six)) {
      setWin(four);
      setFourColor('box-win');
      setFiveColor('box-win');
      setSixColor('box-win');
      return;
    }
    if (checkingWinner(seven, eight, nine)) {
      setWin(seven);
      setSevenColor('box-win');
      setEightColor('box-win');
      setNineColor('box-win');
      return;
    }

    // vertical lines

    if (checkingWinner(one, four, seven)) {
      setWin(four);
      setOneColor('box-win');
      setFourColor('box-win');
      setSevenColor('box-win');
      return;
    }
    if (checkingWinner(two, five, eight)) {
      setWin(five);
      setTwoColor('box-win');
      setFiveColor('box-win');
      setEightColor('box-win');
      return;
    }
    if (checkingWinner(three, six, nine)) {
      setWin(six);
      setThreeColor('box-win');
      setSixColor('box-win');
      setNineColor('box-win');
      return;
    }

    // transverse lines

    if (checkingWinner(one, five, nine)) {
      setWin(nine);
      setOneColor('box-win');
      setFiveColor('box-win');
      setNineColor('box-win');
      return;
    }
    if (checkingWinner(three, five, seven)) {
      setWin(five);
      setThreeColor('box-win');
      setFiveColor('box-win');
      setSevenColor('box-win');
      return;
    }

  }, [one, two, three, four, five, six, seven, eight, nine,])

  useEffect(() => {
    if (win !== '') {
      setDisabled(true);
    }
  }, [win])

  const playAgain = () => {
    setOne('');
    setTwo('');
    setThree('');
    setFour('');
    setFive('');
    setSix('');
    setSeven('');
    setEight('');
    setNine('');

    setCurrPlayer('X');

    setWin('');

    setDisabled(false);

    setTryAgain(0);
  }

  useEffect(() => {
    const stateArr = [one, two, three, four, five, six, seven, eight, nine,];
    stateArr.map((item) => {
      if (item !== '') {
        setTryAgain(tryAgain + 1);
      }
    })
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
    currPlayer,
    win,
    disabled,
    tryAgain,
    oneColor,
    twoColor,
    threeColor,
    fourColor,
    fiveColor,
    sixColor,
    sevenColor,
    eightColor,
    nineColor,
    choosingBox,
    playAgain,
  }
  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  )
}

export default Provider;