import React, { useEffect } from 'react'
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { URL_API } from './helper'
import MenuPage from './pages/menu';
import ManagePage from './pages/manage';
import ReportPage from './pages/report';
import LogoutPage from './pages/logout';
import { getItemAction } from './actions'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItemAction())
  })

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

