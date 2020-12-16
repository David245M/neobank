import db from '../db.js'

const bills = async (req, res) => {
  const id = res.locals.userId
  try {
    const [cards] = await db.query('SELECT * FROM bill WHERE owner_id = ?', [id])
    return res.json(cards.map(card => ({...card, id: undefined, owner_id: undefined})))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
} 

export default bills