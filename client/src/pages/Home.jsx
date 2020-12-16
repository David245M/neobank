import { useContext, useEffect, useState } from 'react'
import { Title } from '../components'
import Card from '../components/Card'
import CreateCard from '../components/CreateCard'
import { UserContext } from '../contexts/auth.context'
import useHttp from '../hooks/useHttp'

const Cards = ({ bills }) => {
  // if (!bills?.length) {
  //   return <div style={{ 
  //     display: 'grid', 
  //     gridTemplateColumns: 'repeat(3, 376px)',
  //     columnGap: 16
  //   }}>
  //     <CreateCard />
  //   </div>
  // }

  return (    
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 376px)',
      columnGap: 16
    }}>
      {bills.map(bill => (
        <Card {...bill}/>
      ))}
      {bills?.length < 3 &&
        <CreateCard />
      }
    </div>
  )
}

const HomePage = () => {
  const { user } = useContext(UserContext)
  const { loading, data } = useHttp('/api/bills', {
    credentials: 'include'
  })
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (data) setCards(data)
  }, [data])

  return (
    <>
      <Title>Hello {user?.name}</Title>
      <Cards bills={cards}/>
    </>
  )
}

export default HomePage
