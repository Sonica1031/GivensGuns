import React from "react";
import { Route, Switch } from "react-router-dom";
import LinkBar from "./components/LinkBar";
import Home from "./components/Home";
import Guns from "./components/Guns";
import UsedGuns from "./components/UsedGuns";
import Ammo from "./components/Ammo";
import Accessories from "./components/Accessories";
import Sales from "./components/Sales";
import ContactUs from "./components/ContactUs";
import Pistol from "./components/Pistols/Pistol";
import PistolList from "./components/Pistols/PistolList"
import BackgroundHeader from "./components/images/BackgroundHeader.png";
import GunPistol from './components/Pistols/GunPistol';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={BackgroundHeader} width="100%" height="200px" opacity="30%" />
        <h1 className="App-top">Givens' Guns</h1>
        <LinkBar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Guns" component={Guns} />
        <Route path="/UsedGuns" component={UsedGuns} />
        <Route path="/Ammo" component={Ammo} />
        <Route path="/Accessories" component={Accessories} />
        <Route path="/Sales" component={Sales} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Guns/Pistols" component={Pistol} />
        <Route
        path="/Guns/Pistols/:id"
        render={props =>{
         return <PistolList {...props} GunPistol = {GunPistol} />
        }} />
      </Switch>
    </div>
  );
}

export default App;
