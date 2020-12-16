import jwt from 'jsonwebtoken'
import db from '../db.js'
import config from '../config.js'

const checkToken = async (req, res) => {
  if(!req.cookies.jwt) {
    return res.status(400).json({ error: 'Unauthorised' })
  }
  const { id } = jwt.verify(req.cookies.jwt, config.secret)
  const [users] = await db.query('SELECT name FROM user WHERE id = ?', [id])
  if (!users.length) {
    return res.status(400).json({ error: 'False token' })
  }
  return res.status(200).send('')
}

export default checkToken