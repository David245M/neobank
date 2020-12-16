import db from '../db.js'
import config from '../config.js'
import jwt from 'jsonwebtoken'

const checkUser = async (req, res, next) => {
  if (req.path !== '/api/login' && req.path !== '/api/register' && req.path !== '/api/logout') {
    console.log('checking ', req.path)
    if(!req.cookies.jwt) {
      return res.status(401).json({ error: 'Unauthorised' })
    }
    const { id } = jwt.verify(req.cookies.jwt, config.secret)
    const [users] = await db.query('SELECT name FROM user WHERE id = ?', [id])
    if (!users.length) {
      return res.status(401).json({ error: 'False token' })
    }
    res.locals.userId = id
  }
  next()
}

export default checkUser