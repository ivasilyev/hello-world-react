import React from 'react';
import './App.css';
import { HelloWorld } from '../hello-world/hello-world.js';
import { AppHeader } from '../app-header/app-header.js';
import { Popup } from '../popup/popup.js'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HelloWorld />
      <Popup/>
    </div>
  );
}

export default App;
