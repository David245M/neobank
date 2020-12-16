import { useState, useContext } from 'react'
import { LoadingContext } from '../contexts/loading'

const useLazyHttp = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const { setLoading } = useContext(LoadingContext)

  const fetchData = async (body) => {
    setLoading(true)
    try {
      const res = await fetch(url, {
        ...options,
        body: JSON.stringify(body)
      });
      const json = await res.json()
      setData(json)
      setError(json?.error)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return [fetchData, { data, error }]
}

export default useLazyHttp