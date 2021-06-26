import React from 'react'
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import { URL } from './helper'
import MenuPage from './pages/menu';
import ManagePage from './pages/manage';
import ReportPage from './pages/report';
import LogoutPage from './pages/logout';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MenuPage}/>
        <Route path="/manage" component={ManagePage}/>
        <Route path="/report" component={ReportPage}/>
        <Route path="/logout" component={LogoutPage}/>
      </Switch>
    </div>
  )
}

export default App

