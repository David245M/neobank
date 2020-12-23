import React, { useState } from 'react'
import styled from 'styled-components'
import useLazyHttp from '../hooks/useLazyHttp'
import useInput from '../hooks/useInput'
import Modal from './Modal'
import Select from './Select'
import { Button } from '.'

const CreateCardStyled = styled.button`
  border:0;
  width: 376px;
  height: 231px;
  cursor: pointer;
  padding: 25px 40px;
  position: relative;
  background:transparent;
  color: ${props => props.theme.color.text};

  &:before {
    content: "";
    position: absolute;
    border: 5px dashed ${props => props.theme.color.text};
    border-radius: 10px;
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
  }

  p {
    border:0;
    height:fit-content;
    width:100%;
    text-align: center;
    font-size: 7.75rem;
  }
`

const CreateCard = () => {
  const [createNewCard] = useLazyHttp('/api/bill/new', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  })
  const [open, setOpen] = useState(false)
  const [currency] = useInput('uah')

  const onSubmit = async event => {
    event.preventDefault()
    await createNewCard({
      currency: currency.value
    })
    setOpen(false)
  }

  return (
    <>
      <CreateCardStyled onClick={() => setOpen(true)}>
        <h2>Create new card</h2>
        <p>+</p>
      </CreateCardStyled>
      <Modal open={open} setOpen={setOpen}>
        <h3>Create new card</h3>
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <Select options={['uah', 'usd', 'eur']} {...currency} />
          <Button primary type="submit">
            Create
          </Button>
        </form>
      </Modal>
    </>
  )
}
export default CreateCard
