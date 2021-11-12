import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from './src/database/connection.js'
import router from './src/routes/route.js'

const app = express()

dotenv.config()
dbConnection(process.env.DB_URI)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('uploads'))

app.use('/api', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
})