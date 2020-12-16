import db from '../db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config.js'
const {secret} = config

const signIn = async (req, res) => {
  const { email, password } = req.body
  try {
    const [users] = await db.query('SELECT * FROM user WHERE email = ?', [email])
    if (!users.length) {
      return res.status(404).json({ error: 'User was not found' })
    }
    const [candidate] = users
    const isMatch = await bcrypt.compare(password, candidate.password)

    if(!isMatch) {
      return res.status(404).json({ error: 'Wrong password' })
    }

    const token = jwt.sign({
      id: candidate.id
    }, secret, { expiresIn: 60 * 60 })

    return res.cookie('jwt', token, { maxAge: 3600000 }).send('')
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e })
  }
}

export default signIn