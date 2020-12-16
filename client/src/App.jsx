import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { UserContext } from './contexts/auth.context'
import Page from './components/Page'
import { LoginPage, RegisterPage } from './pages'
import Layout from './pages/Layout'
import { LoadingContext } from './contexts/loading'

const Unsecure = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/sign/in" />
    </Route>
    <Route path="/sign-in">
      <LoginPage />
    </Route>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route>
      <Redirect to="/sign-in" />
    </Route>
  </Switch>
)

const Secure = () => <Layout />

const App = () => {
  const { authorised, checkToken } = useContext(UserContext)
  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(async() => {
    setLoading(true)
    await checkToken()
    setLoading(false)
  }, [])


  return (
    <Page>
      {
        authorised ?
        <Secure /> :
        <Unsecure />
      }
    </Page>
  );
}

export default App;