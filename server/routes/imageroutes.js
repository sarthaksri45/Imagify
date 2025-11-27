import express from 'express'
import { generateimage } from '../controllers/imagecontroller.js'
import userauth from '../middlewares/auth.js'
const imagerouter= express.Router()
imagerouter.post('/genimage',userauth,generateimage)
export default imagerouter