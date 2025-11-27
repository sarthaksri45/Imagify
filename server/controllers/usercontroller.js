import usermodel from "../models/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'
import transactionmodel from "../models/transactionmodel.js";

const registeruser= async(req,res)=>{
try {
    const{name,email,password} = req.body;
    if(!name||!email||!password){
        return res.json({success:false, message: 'Missing Details'})
    }
    const salt= await bcrypt.genSalt(10)
    const hashpassword= await bcrypt.hash(password,salt)
    const userdata={
        name,
        email,
        password: hashpassword
    }
    const newuser= new usermodel(userdata)
    const user= await newuser.save()
    const token = jwt.sign({id : user._id},process.env.JWT_SECRET)
    res.json({success:true,token,user:{name:user.name}})
} catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
    
}
}

const userlogin= async(req,res)=>{
    try {
        const {email,password}= req.body
        const user= await usermodel.findOne({email})
        if(!user){
           return res.json({success:false , message: "user not found with this email id"})
        }
        else 
        {
        const ismatch= await bcrypt.compare(password,user.password)
        if(ismatch){
            const token = jwt.sign({id : user._id},process.env.JWT_SECRET)
            res.json({success:true,token,user:{name:user.name}})
        }
        else res.json({success:false, message:"incorrect password"})
    }
    } 
    catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
    }
    
}
const usercredit =async (req,res)=>{
    try {
        const userid = req.user;
        const user= await usermodel.findById(userid)
        res.json({
            success:true,
            credit: user.credit,
            user:{name: user.name, credit: user.credit}
        })
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}
const razorpayinstance= new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});
const paymentrazorpay=async(req,res)=>{
    try {
        const{userid,planid}=req.body
        const userdata=await usermodel.findById(userid)
        if(!userdata||!planid){
           return res.json({
                success:false,
                message: "userid or plan id missing"
            })
        }
        let credits,plan,amount, date
        switch(planid){
            case 'Basic':
                plan='Basic'
                amount=5
                credits=100
                break;
            case 'Advanced':
                plan='Advanced'
                amount=10
                credits=500
                break;
            case 'Business':
                plan='Business'
                amount=20
                credits=5000
                break;
             default:
            return res.json({success:false,message:"plan not found"})   
        }
          date=Date.now()  
          const transactiondata={
            credits,date,plan,amount,userid
          }
        const newtransaction = await transactionmodel.create(transactiondata)
        const options= {
            amount:amount * 100,
            currency: process.env.currency,
            receipt: newtransaction._id
        }
        await razorpayinstance.orders.create(options,(error,order)=>{
             if(error){
                console.log(error.message);
              return  res.json({
                    success:false,
                    message:error.message
                })
            }
            res.json({
                success:true,order
            })
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            success:false,
            message: error.message
        })
        
    }
}
const verifypay=async(req,res)=>{
    try {
        const {razorpay_order_id}=req.body.res
        const orderinfo= await razorpayinstance.orders.fetch(razorpay_order_id)
        if(orderinfo.status === 'paid'){
         const transactiondata= await transactionmodel.findById(orderinfo.receipt)
         if(transactiondata.payment){
            return res.json({success:false, message:"payment already verified"})
         }
         const userdata= await usermodel.findById(transactiondata.userid)
         const credit= userdata.credit + transactiondata.credits
         await usermodel.findByIdAndUpdate(userdata._id,{credit})
         await transactionmodel.findByIdAndUpdate(transactiondata._id,{payment :true})
         res.json({success:true, message:"credits added"})
        }
        else {
            res.json({success:false, message:"payment failed"})
        }
        
    } catch (error) {
        res.json({success : false, message:"failed"})
    }
}

export {registeruser, userlogin,usercredit,paymentrazorpay,verifypay}