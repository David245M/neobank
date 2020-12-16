import { useState, useEffect } from 'react'
import useHttp from '../hooks/useHttp'

const History = () => {
  const [transactions, setTransactions] = useState([])

  const { data, error, loading } = useHttp('/api/history', {
    credentials: 'include',
    // headers: { 'Content-Type': 'application/json' },
  }) 

  useEffect(() => {
    data && setTransactions(data)
  }, [data])

  return transactions.map(tran => (
    <div>
      <pre>
        {tran.transmitter}
      </pre>
    </div>
  ))
}

export default History
