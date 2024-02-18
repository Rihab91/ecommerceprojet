
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {validationResult}=require("express-validator")


const Register=async(req,res)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({msg:errors.array()})
        }
   else{
    const{username,email,password,address,city,zipCode}=req.body
    const existUser=await User.findOne({email:email})
    if (existUser){
        res.status(400).json({msg:"User already exist! pls login"})
    }
    else {
    const hashPW=await bcrypt.hash(password,10)
    const newUser=await User.create({username,email,address,zipCode,city,password:hashPW})
    const token=await jwt.sign({id:newUser._id},process.env.JWT_TOKEN,{expiresIn:"7d"})
    res.status(201).json({msg:"Registre Done!",token})
   }
    }
} catch (error) {
    res.status(501).json({msg:"something wen wrong"})
}
}

const Login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const existUser=await User.findOne({email:email})
        if(!existUser){
            console.log(existUser)
            res.status(400).json({msg:"pls make sure to registre!"})

        }
    else{
        const VerifyPW=await bcrypt.compare(password,existUser.password)
        if(!VerifyPW){
        res.status(400).json({msg:"wrong password pls try again!"})}
        else{
            const token=await jwt.sign({id:existUser._id},process.env.JWT_TOKEN,{expiresIn:"7d"})
            res.status(200).json({msg:"Login Done!",token})   
        }
    }
    } 
    catch (error) {
          res.status(500).json({msg:"something wen wrong"})
    }
}
const UserData=async(req,res)=>{
try {
    const user=await User.findOne({_id:req.userId})
 
    if(!user){
        res.status(400).json({msg:'user not exist'})
    }
    else{
       res.status(200).json({msg:'get user data',user}) 
    }
} catch (error) {
    res.status(500).json({msg:"something wen wrong"}) 
    
}
}

module.exports={Register,Login,UserData}