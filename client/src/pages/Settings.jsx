import { useContext } from 'react'
import { Button } from '../components'
import { UserContext } from '../contexts/auth.context'

const SettingsPage = () => {
  const { logout } = useContext(UserContext)
  return (
    <Button onClick={logout}>Exit</Button>
  )
}

export default SettingsPage
