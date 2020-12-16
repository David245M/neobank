import React, { useState } from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import { HomePage, HistoryPage, CreateTransactionPage, SettingsPage } from './'
import { Sidebar } from '../components'

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/history',
    component: HistoryPage
  },
  {
    path: '/create',
    component: CreateTransactionPage
  },
  {
    path: '/settings',
    component: SettingsPage
  },
]

const StyledMain = styled.main`
  padding: 56px;
  padding-left: calc(56px + 150px);
  width:100%;
`

const Layout = () => {
  const [page, setPage] = useState('homepage')
  return (
    <>
      <Sidebar page={page} onChange={setPage} />
      <StyledMain>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={!!route.exact}
              component={route.component}
             /> 
          ))}
          <Route> <Redirect to="/" /> </Route>
        </Switch>
      </StyledMain>
    </>
  )
}

export default Layout
