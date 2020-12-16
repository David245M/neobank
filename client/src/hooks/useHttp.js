import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/auth.context'
import { LoadingContext } from '../contexts/loading'

const useHttp = (url, options) => {
  const { logout } = useContext(UserContext)
  const { setLoading } = useContext(LoadingContext)  
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url, options);
      if (res.status === 401) throw res.status
      const json = await res.json()
      setData(json)
    } catch (error) {
      if (error === 401) logout()
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return { data, error }
}

export default useHttp