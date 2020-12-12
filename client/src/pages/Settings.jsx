import { useContext } from 'react'
import { Button } from '../components'
import { UserContext } from '../contexts/auth.context'
import Layout from './Layout'

const SettingsPage = () => {
  const { logout } = useContext(UserContext)
  return (
    <Layout>
      <Button onClick={logout}>Exit</Button>
    </Layout>
  )
}

export default SettingsPage
