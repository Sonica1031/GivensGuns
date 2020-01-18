import React from 'react';
import {Route} from 'react-router-dom';
import LinkBar from './components/LinkBar';
import Home from './components/Home';
import Guns from './components/Guns';
import UsedGuns from './components/UsedGuns';
import Ammo from './components/Ammo';
import Accessories from './components/Accessories';
import Sales from './components/Sales';
import ContactUs from './components/ContactUs';
import axios from "axios";

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">
          Givens' Guns
        </h1>
        <LinkBar />
      </header>
      <div>
<Route exact path="/" component={Home} />
<Route exact path="/Guns" component={Guns} />
<Route exact path="/UsedGuns" component={UsedGuns} />
<Route exact path="/Ammo" component={Ammo} />
<Route exact path="/Accessories" component={Accessories} />
<Route exact path="/Sales" component={Sales} />
<Route exact path="/ContactUs" component={ContactUs} />
      </div>
    </div>
  );
}

export default App;
