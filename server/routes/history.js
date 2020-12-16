import db from '../db.js'

const history = async (req, res) => {
  const id = res.locals.userId
  try {
    const [rows] = await db.query('SELECT * FROM history WHERE receiver = ? OR transmitter = ?', [id, id])
    console.log('Sending history for '+ id)
    return res.status(200).json(rows)
  } catch (error) {
    console.error(error);
    res.status(500).json({ ...error })
  }
} 

export default history