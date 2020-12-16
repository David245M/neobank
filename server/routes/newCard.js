import db from '../db.js'
import luhn from 'luhn-generator'

const newCard = async (req, res) => {
  const owner_id = res.locals.userId
  const { currency } = req.body
  try {
    const [cards] = await db.query('SELECT * FROM bill WHERE owner_id = ?', [owner_id])
    if ([...cards].find(card => card.currency === currency)) {
      return res.status(400).json({ error: 'Card exists' })
    }
    const number = luhn.random(16)
    const card = {
      currency,
      number,
      owner_id 
    }
    const [result] = await db.query('INSERT INTO bill SET ?', card)
    console.log(result)
    res.json({ info: result.info })
  } catch (error) {
    res.status(500).json({ error})
  }
}

export default newCard