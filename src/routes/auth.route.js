import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Login from '../pages/authentication/login'
import Register from '../pages/authentication/register'

const AuthRoute = () => {
  return (
    <Switch>
      <Route path='/auth/login'>
        <Login />
      </Route>
      <Route path='/auth/register'>
        <Register />
      </Route>
      <Redirect to='/auth/login' />
    </Switch>
  )
}

export default AuthRoute
