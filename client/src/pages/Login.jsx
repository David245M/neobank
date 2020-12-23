import { useContext } from 'react'
import { Paper, Title, Email, Password, Checkbox, Button, Link } from '../components'
import { UserContext } from '../contexts/auth.context'
import useInput from '../hooks/useInput'

const Login = () => {
  const [email] = useInput()
  const [password] = useInput()
  const { login } = useContext(UserContext)

  const onSubmit = event => {
    event.preventDefault()
    login({ 
      email: email.value, 
      password: password.value 
    })
  }
  return (
    <Paper style={{
      width: '400px',
      height: 'clamp(375px, 68%, 550px)',
      padding: '25px 75px 25px',
      alignItems: 'center',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <Title>Login</Title>
      <form onSubmit={onSubmit} style={{
        width: '100%',
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Email label="Email" placeholder="example@gmail.com" {...email}/>
        <Password label="Password" {...password} />
        <Checkbox name="remember" label="Remember me" />
        <Button primary type="submit">Enter</Button>
      </form>
      <Link to="/register">Has no account?</Link> 
    </Paper>
  )
}

export default Login