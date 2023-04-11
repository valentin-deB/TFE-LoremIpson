import Layout  from './layout/Layout';
import Screen  from './screen/Screen';
import { useState } from 'react'
import './App.scss';

function App() {

  //variable qui va stocker les app ouverte
  //function open app
  //passer la liste aux différents des components
  
  //1 context provider  -- il permet de partager des variable avec les enfants
  //un context provider par propriété a passer (thème ect)

  //2 https://github.com/pmndrs/zustand


  return (
    <div className="App future">
      <Screen />
      <Layout />
    </div>
  );
}

export default App
