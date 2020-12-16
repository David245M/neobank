import React from 'react'
import { Button, Input } from '../components'
import useLazyHttp from '../hooks/useLazyHttp'
import useInput from '../hooks/useInput'

const CreateTransaction = () => {
  const [from] = useInput('5375414115861758')
  const [to] = useInput('5375418802750851')
  const [summ] = useInput(1)
  const [fetchData] = useLazyHttp('/send', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const onSubmit = async event => {
    event.preventDefault()
    fetchData({
      transmitter: from.value,
      receiver: to.value,
      total: summ.value * 100
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <Input label="Transmitter" {...from}/>
      <Input label="Receiver" {...to}/>
      <Input label="Summ" {...summ}/>
      <Button type="submit">Сreate transaction</Button>
    </form>
  )
}

export default CreateTransaction
