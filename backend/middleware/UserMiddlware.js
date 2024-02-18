const jwt=require("jsonwebtoken")

const userMiddleware=async(req,res,next)=>{
try {
    const token=req.headers.token
    if(!token){
        res.status(400).json({msg:"u are not authorized !"})
    }
else{
const VerifyToken=await jwt.verify(token,process.env.JWT_TOKEN)
if(!VerifyToken){
res.status(400).json({msg:'you are not autorized'})}
else{
    req.userId=VerifyToken.id
    next()
}
} 
    


} catch (error) {
    res.status(500).json({msg:"something wen wrong"})
}

    
}
module.exports=userMiddleware