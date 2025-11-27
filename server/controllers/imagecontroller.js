import { response } from "express";
import usermodel from "../models/usermodel.js";
import FormData from "form-data";
import axios from 'axios'
export const generateimage= async(req,res)=>{
try {
     const{prompt}=req.body
     const userid=req.user
     const user = await usermodel.findById(userid)
     if(!user||!prompt){
      return res.json({
        success:false,
        message: "missing details"
      })
    }
     if(user.credit===0 || usermodel.credit<0){
        return res.json({
            success:failure,
            message : "Insufficient funds",
            credit: user.credit
        })
     }
     const formdata= new FormData()
     formdata.append('prompt',prompt)
     const {data}=await axios.post('https://clipdrop-api.co/text-to-image/v1',formdata,{
        headers: {
    'x-api-key': process.env.CLIPDROP_API,
  },responseType: "arraybuffer"
     })
     const base64image= Buffer.from(data,'binary').toString('base64')
     const resultimage= `data:image/png;base64,${base64image}`
     await usermodel.findByIdAndUpdate(user.id,{credit :user.credit-1})
     res.json({success:true, message:"Image Generated",resultimage})
} catch (error) {
    console.log(error);
        res.json({success:false, message: error.message})
}
}
