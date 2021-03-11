import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Album } from './sections/Album'
import { Home } from './sections/Home'

export default function AuthApp(){
  return(
    <>
      <Switch>
        <Route exact path="/app/home" component={Home}/>
        <Route exact path="/app/album" component={Album}/>

        <Redirect to="/app/home"/>
      
      </Switch>
    </>
  )
}