import express from 'express'
import {registeruser,usercredit,userlogin} from '../controllers/usercontroller.js'
import userauth from '../middlewares/auth.js'
const userrouter= express.Router()
userrouter.post('/register',registeruser)
userrouter.post('/login',userlogin)
userrouter.get('/credit',userauth,usercredit)
export default userrouter