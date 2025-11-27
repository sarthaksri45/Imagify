import usermodel from "../models/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'

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


export {registeruser, userlogin,usercredit}