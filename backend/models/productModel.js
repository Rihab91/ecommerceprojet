const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    quantité:{type:Number,require:true},
    categorie:{type:mongoose.Schema.ObjectId,ref:"category"},
    prix:{type:Number,require:true},
    image:{type:String,require:true},
    // on le travail avec la relation entre les tables categories et produit
    // pourr travailler la relation on utilise schema
    // Types de ce champ est de type object.id :son clé etranger
    // ref ou il se trouves: dans la table categories
    // for update  or ajout or supp dns notre collection   
},
{ timestamps: true}
)
const product=mongoose.model("Product",productSchema)
module.exports=product