import { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import Paper from '../components/Paper'
import useLazyHttp from '../hooks/useLazyHttp'
import useHttp from '../hooks/useHttp'
import useCheckbox from '../hooks/useCheckbox'
import { Title, Select, Checkbox, Button } from '../components'
import useInput from '../hooks/useInput'
import { getSymbol, Balance } from '../components/Card'
import Pdf from 'react-to-pdf'
const Page = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
const Row = styled(Paper)`
  padding: 15px;  
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  overflow-y: auto;
  padding:20px;
  margin: 40px 0;
  width: 70%;
  min-width: 700px;
  
  display: grid;
  gap: 16px;
  grid-auto-rows: 100px;
`
const History = () => {
  const [transactions, setTransactions] = useState([])
  const [cards, setCards] = useState([])
  const [income] = useCheckbox(true)
  const [outcome] = useCheckbox(true)
  const [select, { setValue: setSelect }] = useInput()
  const ref = createRef()

  const { data: bills } = useHttp('/api/bills', {
    credentials: 'include'
  }) 
  
  const [query, { data }] = useLazyHttp('/api/history', {
    method: "POST",
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  }) 

  useEffect(() => {
    if (bills) {
      setCards(bills.map(bill => bill.number))
      setSelect(bills[0].number)
    }
  }, [bills])
  
  useEffect(() => {
    if (data && select.value){
      setTransactions(data || [])
    }
  }, [data])
  
  useEffect(() => {
    query({
      income: income.checked,
      outcome: outcome.checked,
      cardNumber: select.value
    })
  }, [income.checked, outcome.checked, select.value, bills])

  const Transaction = ({ transmitterNumber, transmitterName, transmitterCurrency, receiverName, receiverNumber, receiverCurrency, send, receive }) => {
    return (
      <Row>
        <div style={{ width: '50%', display: 'flex', alignItems:'center', justifyContent: 'space-evenly' }}>
          <div>
            <h3>{transmitterName}</h3>
            <p>{transmitterNumber}</p>
          </div>
          <div style={{ flex:1, display: 'flex', justifyContent: 'center'}}>
            <Balance red>-{getSymbol(transmitterCurrency)}{send}</Balance>
          </div>
        </div>
        <div style={{ width: '50%', display: 'flex', alignItems:'center' }}>
          <div>
            <h3>{receiverName}</h3>
            <p>{receiverNumber}</p>
          </div>
          <div style={{ flex:1, display: 'flex', justifyContent: 'center'}}>
            <Balance>+{getSymbol(receiverCurrency)}{receive}</Balance>
          </div>
        </div>
      </Row>
    )
  } 
  
  return (
    <>
      <Title >History</Title>
      <Page>
        <Container ref={ref}>
          { transactions.length ?
            transactions.map(tran => (
              <Transaction {...tran} />
            )) :
            <div>
              Woooow such empty....
            </div>
          }
        </Container>
        <div style={{marginLeft: 20}}>
          <Select label="Select card" options={cards} {...select} />
          <Checkbox label="Income" {...income}/>
          <Checkbox label="Outcome" {...outcome}/>
          <Pdf targetRef={ref} scale={0.8}>
            {({ toPdf }) => <Button onClick={toPdf}>Download</Button>}
          </Pdf>
        </div>
      </Page>
    </>
  )
}

export default History