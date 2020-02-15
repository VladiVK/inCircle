import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";

import {BrowserRouter, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/Dialogs.js";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
