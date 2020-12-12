import db from '../db.js'
import bcrypt from 'bcrypt'

const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const [users] = await db.query('SELECT * FROM user WHERE email = ?', [email])
    if(users.length) {
      return res.status(400).json({ message: 'User with this email already exists' })
    }
    
    const [newUser] = await db.query(
      'INSERT INTO user (name, email, password) VALUES (?,?,?)', 
      [name, email, await bcrypt.hash(password, 12)]
    )
    return res.status(201).json({ success: newUser.affectedRows })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error })
  }
}

export default register