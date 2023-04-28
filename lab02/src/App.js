import React from 'react';
import Border from './Border';
import BorderTwo from './BorderTwo';
import Shout from './Shout';
import SumOfTwo from './SumOfTwo';
import './App.css';

function App() {
  return (
    <>
    <Border/>
    <Shout displayMessage="HOW ARE YOU?"/>
    <SumOfTwo number1='6' number2='5'/>
    <BorderTwo url={require('./logo192.png')}/>
    </>
  );
}

export default App;
