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
import BackgroundHeader from './components/images/BackgroundHeader.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <img src={BackgroundHeader} width="100%" height="200px" opacity="70%" />
          <h1 className="App-top">Givens' Guns</h1>
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
