import { useState } from 'react'

const useLazyHttp = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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

  return [fetchData,{ loading, data, error }]
}

export default useLazyHttp