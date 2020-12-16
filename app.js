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

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join('client','build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'))
  })
}

app.use(checkUser)

app.post('/login', signIn)
app.post('/register', register)
app.post('/logout', logout)
app.get('/bills', bills)
app.post('/send', create)
app.get('/history', history)
app.get('/token', checkToken)
app.post('/bill/new', newCard)

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