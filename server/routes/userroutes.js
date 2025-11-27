import express from 'express'
import {paymentrazorpay, registeruser,usercredit,userlogin,verifypay} from '../controllers/usercontroller.js'
import userauth from '../middlewares/auth.js'
import userauth1 from '../middlewares/auth1.js'

const userrouter= express.Router()
userrouter.post('/register',registeruser)
userrouter.post('/login',userlogin)
userrouter.get('/credit',userauth,usercredit)
userrouter.post('/payrazor',userauth1,paymentrazorpay)
userrouter.post('/verifyrazor',userauth1,verifypay)
export default userrouter