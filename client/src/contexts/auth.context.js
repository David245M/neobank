import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UserContext = createContext({
  authorised: false
})

const UserProvider = props => {
  const [authorised, setAuthorised] = useState(false)

  const login = async credientals => {
    try{
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credientals)
      })
      if (res.status === 404) throw "User not found"
      res.status == 200 && setAuthorised(true) 
    } catch (error) {
      alert(error)
    }
  }

  const logout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    if (res.status == 200) setAuthorised(false)
  }

  const createUser = async info => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info),
    }) 

    const body = await res.json()
    if (res.status == 200 && body.success) {
      return login(info)
    }
    alert(body.error)
  }

  const checkToken = async () => {
    try {
      const res = await fetch('/api/token', {
        credentials: 'include'
      })
      setAuthorised(res.status == 200)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ authorised, login, logout, createUser, checkToken }} {...props} />
  )
}

export default UserProvider
export { UserContext }