import Layout  from './Layout/Layout';
import Screen  from './Screen/Screen';
import { useState } from 'react'
import './App.scss'
import Calculator from './Apps/Calculator/calculator';

function App() {

  return (
    <div className="App">
      <Calculator windowId='12' currentStyle='ModernMac'/>
      <Screen />
      <Layout />
    </div>
  );
}

export default App
