import { useContext } from 'react'
import { Button, Email, Paper, Password, Title, Input, Link } from "../components"
import { UserContext } from '../contexts/auth.context'
import useInput from "../hooks/useInput"

const Register = () => {
  const [name] = useInput()
  const [email] = useInput()
  const [password] = useInput()
  const { createUser } = useContext(UserContext)

  const handleSubmit = async event => {
    event.preventDefault()
    createUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
  }

  return (
    <Paper style={{
      width: '400px',
      height: 'clamp(450px, 75%, 550px)',
      padding: '25px 75px 25px',
      alignItems: 'center',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <Title>Register</Title>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Input name="name"  label="Your name" placeholder="Daniel" {...name} />
        <Email name="email" label="Email" placeholder="example@gmail.com" {...email} />
        <Password name="password" label="Password" {...password} />
        <Button primary type="submit">Create account</Button>
      </form>
      <Link to="/sign-in">Alredy has account?</Link>
    </Paper>
  )
}

export default Register
