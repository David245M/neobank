import React, { useState, useEffect, createContext } from 'react'
import Loading from '../components/Loading'

const LoadingContext = createContext(false)

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      { children }
      <Loading visible={loading}/>
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
export { LoadingContext }