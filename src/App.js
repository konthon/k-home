import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

import { firebaseConfig } from './config/firebase'

import Landing from './pages/landing'
import Homes from './pages/homes'
import AuthRoute from './routes/auth.route'

initializeApp(firebaseConfig)

function App() {
  if (process.env.NODE_ENV !== 'production') {
    const auth = getAuth()
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/auth'>
            <AuthRoute />
          </Route>
          <Route path='/homes'>
            <Homes />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
