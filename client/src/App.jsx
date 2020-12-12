import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/Login'
import Page from './components/Page'
import HomePage from './pages/Home'
import { UserContext } from './contexts/auth.context'
import Register from './pages/Register'
import Transactions from './pages/Transactions'
import CreateTransaction from './pages/CreateTransaction'
import SettingsPage from './pages/Settings'

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/transactions',
    component: Transactions
  },
  {
    path: '/create',
    component: CreateTransaction
  },
  {
    path: '/settings',
    component: SettingsPage
  },
]

const App = () => {
  const { user } = useContext(UserContext)
  return (
    <Page>
      <Switch>
        <Route exact path="/">
          <Redirect to={user ? '/home' : '/sign-in'} />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register /> }
        </Route>
        <Route path="/sign-in">
          {user ? <Redirect to="/" /> : <LoginPage /> }
        </Route>
        {routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
          >
            {user ? <route.component /> : <Redirect to="/" />}
          </Route>
        ))}
        <Route> <Redirect to="/" /> </Route>
      </Switch>
    </Page>
  );
}




export default App;