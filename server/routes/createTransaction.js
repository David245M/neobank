import db from '../db.js'
import getCurrency from '../getCurrency.js'

const newTransaction = async (req, res) => {
  const { transmitter: transmitterNumber, receiver: receiverNumber, total } = req.body
  try {
    await db.query('START TRANSACTION')
    console.log('transaction begins')
    const [[transmitter]] =  await db.query(
      'SELECT * FROM bill WHERE number = ?', 
      [transmitterNumber]
    )
    const [[receiver]] =  await db.query(
      'SELECT * FROM bill WHERE number = ?', 
      [receiverNumber]
    )

    if (transmitter.blocked || receiver.blocked) {
      await db.query(
        'INSERT INTO history (transmitter, receiver, total, success) VALUES (?, ?, ?, ?)',
        [transmitter.id, receiver.id, total, 0]
      )
      await db.query('ROLLBACK')
      return res.code(400).json({ error: 'Card is blocked' })
    }
    console.log('not blocked')
    console.log(transmitter.balance, total)
    if (transmitter.balance < total) {
      await db.query(
        'INSERT INTO history (transmitter, receiver, total, success) VALUES (?, ?, ?, ?)',
        [transmitter.id, receiver.id, total, 0]
      )
      await db.query('ROLLBACK')
      return res.status(400).json({ error: 'Not enough money' })
    }
    console.log('enough money')


    const rate = transmitter.currency.toUpperCase() + '_' + receiver.currency.toUpperCase()
    const currency = await getCurrency(rate)
    console.log('CURRENCY: ' + currency[rate].toFixed(2))

    await db.query(
      'UPDATE bill SET balance = balance - ? WHERE number = ?', 
      [total, transmitterNumber]
    )
    await db.query(
      'UPDATE bill SET balance = balance + ? WHERE number = ?', 
      [total * currency[rate].toFixed(2), receiverNumber]
    )
    await db.query(
      'INSERT INTO history (transmitter, receiver, total, exchange, success) VALUES (?, ?, ?, ?,?)',
      [transmitter.id, receiver.id, total, parseInt(currency[rate].toFixed(2) * 100), true]
    )
    await db.query('COMMIT')
    console.log('success')
    return res.json({ success: true })

  } catch (error) {
    await db.query('ROLLBACK')
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export default newTransaction