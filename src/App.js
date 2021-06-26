import React from 'react'
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import { URL } from './helper'
import MenuPage from './pages/menu';
import ManagePage from './pages/manage';
import ReportPage from './pages/report';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MenuPage}/>
        <Route path="/manage" component={ManagePage}/>
        <Route path="/report" component={ReportPage}/>
      </Switch>
    </div>
  )
}

export default App

