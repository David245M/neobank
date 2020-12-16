import db from '../db.js'

const history = async (req, res) => {
  const id = res.locals.userId
  const { income, outcome, cardNumber = '5375418802750851' } = req.body
  try {
    const [cards] = await db.query('SELECT * FROM bill WHERE owner_id = ?', [id])
    if (!cards.length) {
      return res.status(404).json({ error: 'No cards' })
    }
    const [cardDefault] = cards
    if (cardNumber && !cards.find(card => card.number == cardNumber)) {
        return res.status(400).json({ error: 'Invalid card number' })
    } 
    
    const cardQuery = cardNumber || cardDefault.number
    let sql = 'SELECT * FROM historyList WHERE ' 
      sql += income && outcome ? `receiverNumber = ${cardQuery} OR transmitterNumber = ${cardQuery}` : '' 
      sql += income && !outcome ?  `receiverNumber = ${cardQuery}` : '' 
      sql += !income && outcome ?  `transmitterNumber = ${cardQuery}` : ''
    // console.log(sql)
    const [rows] = await db.query(sql, [id, id])
    console.log('Sending history for '+ id)
    return res.status(200).json( rows )
  } catch (error) {
    console.error(error);
    res.status(500).json({ ...error })
  }
} 

export default history