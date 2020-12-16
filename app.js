import express from 'express'
import path, { dirname } from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url'

const { port } = config
import db from './server/db.js'
import config from './server/config.js'
import signIn from './server/routes/login.js'
import register from './server/routes/register.js'
import logout from './server/routes/logout.js'
import bills from './server/routes/bills.js'
import history from './server/routes/history.js'
import create from './server/routes/createTransaction.js'
import checkUser from './server/middlewares/checkUser.js'
import checkToken from './server/routes/checkToken.js'
import newCard from './server/routes/newCard.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true
}))


app.use(checkUser)

app.post('/api/login', signIn)
app.post('/api/register', register)
app.post('/api/logout', logout)
app.get('/api/bills', bills)
app.post('/api/send', create)
app.get('/api/history', history)
app.get('/api/token', checkToken)
app.post('/api/bill/new', newCard)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join('client','build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'))
  })
}
const runServer = async () => {
  try {
    // await db.connect()
    console.log('Database connected!')
    app.listen(port, () => console.log(`Server running at ${port} port...`))
  } catch (error) {
    console.error(error)    
    db.end(() => console.log('Database is disconected'))
    process.exit(1)
  } 
}

runServer()