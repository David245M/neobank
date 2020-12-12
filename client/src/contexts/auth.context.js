import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UserContext = createContext({
  user: null,
  token: null
})

const lsi = name => {
  const value = localStorage.getItem(name)
  return value && value !== 'undefined' ? JSON.parse(value) : null
}

const UserProvider = props => {
  const [user, setUser] = useState(lsi('user'))
  const [token, setToken] = useState(lsi('token'))
  const history = useHistory()

  const login = async credientals => {
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credientals)
    })

    const data = await res.json()
    if(res.ok && data.user) {
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      setToken(data.time)
      localStorage.setItem('token', JSON.stringify(data.time))
    }
    
    if (data.message) alert(data.message)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    setToken(null)
    localStorage.removeItem('token')
    history.push('/')
  }

  const createUser = async info => {
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info),
    }) 

    const body = await res.json()
    if (res.ok && body.success) {
        return login(info)
    }
    alert(body.message)
  }

  return (
    <UserContext.Provider value={{token, user, login, logout, createUser}} {...props} />
  )
}

export default UserProvider
export { UserContext }