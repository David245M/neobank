import db from '../db.js'

const history = async (req, res) => {
  const id = res.locals.userId
  try {
    const [rows] = await db.query('SELECT * FROM history WHERE receiver = ? OR transmitter = ?', [id, id])
    return res.json(rows)
  } catch (error) {
    console.error(error);
    res.status(500).json({ ...error })
  }
} 

export default history