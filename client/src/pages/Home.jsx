import { useContext } from 'react'
import Layout from './Layout'
import { UserContext } from '../contexts/auth.context'

const HomePage = () => {
  const { logout } = useContext(UserContext)
  return (
    <Layout>

    </Layout>
  )
}

export default HomePage
