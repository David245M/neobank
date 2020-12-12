import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const { port } = config
import db from './server/db.js'
import config from './server/config.js'
import signIn from './server/routes/login.js'
import register from './server/routes/register.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(express.json())

app.post('/login', signIn)
app.post('/register', register)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const runServer = async () => {
  try {
    await db.connect()
    console.log('Database connected!')
    app.listen(port, () => console.log(`Server running at ${port} port...`))
  } catch (error) {
    console.error(error)    
    db.end(() => console.log('Database is disconected'))
    process.exit(1)
  } 
}

runServer()