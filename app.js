import express from 'express'
import path from 'path'
import db from './server/db.js'
import config from './server/config.js'
const { port } = config

import signIn from './server/routes/login.js'
import register from './server/routes/register.js'

const app = express()
app.use(express.json())

app.post('/login', signIn)
app.post('/register', register)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(process.cwd(), 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'))
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