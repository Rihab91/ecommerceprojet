const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
    product:{type:mongoose.Schema.ObjectId, ref: 'Product',required:true},
    description:{type:String,required:true},
    prix:{type:Number,required:true},
    quantité:{type:Number,required:true},
    prix_Total:{type:Number,required:true},
    user:{type:mongoose.Schema.ObjectId,
        ref:'User'}
})
const order=mongoose.model("Order",orderSchema)
module.exports=order