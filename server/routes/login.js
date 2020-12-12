import db from '../db.js'
import bcrypt from 'bcrypt'

const signIn = async (req, res) => {
  const { email, password } = req.body
  try {
    const [users] = await db.query('SELECT * FROM user WHERE email = ?', [email])
    if (!users.length) {
      return res.status(401).json({ message: 'User was not found' })
    }
    const [candidate] = users
    const isMatch = await bcrypt.compare(password, candidate.password)

    if(!isMatch) {
      return res.status(401).json({ message: 'Wrong password' })
    }
    return res.json({
      user: {
        email: candidate.email,
        fullname: candidate.name,
        role: candidate.role
      },
      time: new Date()
     })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

export default signIn