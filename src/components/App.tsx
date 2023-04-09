import Layout  from './Layout/Layout';
import Screen  from './Screen/Screen';
import { useState } from 'react'
import './App.scss';

function App() {

  return (
    <div className="App">
      <Screen />
      <Layout />
    </div>
  );
}

export default App
