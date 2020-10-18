import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './display';

function App() {
  const [number, setNumber] = useState(999);
  const [inputValue, setInputValue] = useState(0);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const changeToAnyNumber = () => {
    setNumber(inputValue);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className='App'>
      <Display number={number} />
      <input onChange={handleChange} type='number' />
      <button onClick={changeToAnyNumber}>Set</button>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

const Display = ({ number }) => {
return <h1>{number}</h1>;
};

export default App;
