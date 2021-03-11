import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login'

export default function UnauthApp(){
  return(
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Redirect to="/"/>
      
      </Switch>
    </>
  )
}