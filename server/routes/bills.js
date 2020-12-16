import db from '../db.js'

const bills = async (req, res) => {
  try {
    const id = res.locals.userId
    const [cards] = await db.query('SELECT * FROM bill WHERE owner_id = ?', [id])
    console.log('Sending bills for ' + id)
    return res.status(200).json(cards.map(card => ({...card, id: undefined, owner_id: undefined})))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
} 

export default bills