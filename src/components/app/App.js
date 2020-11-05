import React from 'react';
import './App.css';
import {HelloWorld} from '../hello-world/hello-world.js';
import {AppHeader} from '../app-header/app-header.js';
import {PopupController} from '../popup/popup-controller.js'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HelloWorld />
      <PopupController/>
    </div>
  );
}

export default App;
