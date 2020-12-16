import mysql2 from 'mysql2'

const database = mysql2.createPool({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'b4ae2add9f2c75',
  password: '89457b45',
  database: 'heroku_f662f44b842e6b6',
  connectionLimit: 100
}).promise()

export default database