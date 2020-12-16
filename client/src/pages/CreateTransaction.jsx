import React, { useEffect, useState } from 'react'
import { Button, Input, Select } from '../components'
import useLazyHttp from '../hooks/useLazyHttp'
import useHttp from '../hooks/useHttp'
import useInput from '../hooks/useInput'

const CreateTransaction = () => {
  const [cards, setCards] = useState()
  const [from, { setValue: setSelect }] = useInput()
  const [to] = useInput()
  const [summ] = useInput(1)
  const [fetchData] = useLazyHttp('/api/send', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { data: bills } = useHttp('/api/bills', {
    credentials: 'include'
  })

  useEffect(() => {
    if (bills) {
      setCards(bills.map(card => card.number))
      setSelect(bills[0].number)
    }
  }, [bills])

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
      {/* <Input label="Transmitter" {...from}/> */}
      <Select label="Transmitter" options={cards} {...from} />
      <Input label="Receiver" {...to}/>
      <Input label="Summ" {...summ}/>
      <Button type="submit">Сreate transaction</Button>
    </form>
  )
}

export default CreateTransaction
