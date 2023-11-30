import express from 'express'
import dotenv from 'dotenv';
import { connectDb } from './db/helpers.js'
import router from './config/router.js'
dotenv.config();

const app = express()

app.use(express.json())
app.use('/api', router)

async function startServer() {
  try {
    await connectDb()
    console.log('🤖 Mongoose is connected')
    app.listen(process.env.PORT, () => console.log(`🤖 Listening on Port: ${process.env.PORT}`))
  } catch (err) {
    console.log('🤖 Oh no something went wrong', err)
  }
}

startServer()
