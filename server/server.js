import express from 'express'
import connectDB from './config/mongodb.js'
import cors from 'cors'
import 'dotenv/config'
import userrouter from './routes/userroutes.js'
import imagerouter from './routes/imageroutes.js'

const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())
await connectDB()
app.use(express.json())
app.use('/api/image',imagerouter)
app.use('/api/user',userrouter)
app.get('/',(req,res)=> res.send("API Working"))
app.listen(PORT, ()=> console.log(`Server running on ${PORT} `));