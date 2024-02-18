const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({path:"./config/.env"})
const port=process.env.PORT ||5000
const cors=require("cors")

app.use(cors())
app.use(express.json())


app.use('/api/categorie',require('./route/categoryRoute'))
app.use('/api/order',require('./route/orderRoute'))
app.use('/api/product',require('./route/productRoute'))
app.use('/api/user',require('./route/userRoute'))
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB onnected"))
.catch((err)=>console.log(err))
app.listen(port,(err)=>{
    err? console.log(err):console.log("server is running in port:",port)
})