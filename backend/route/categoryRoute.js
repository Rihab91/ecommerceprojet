const express=require("express")
const router=express.Router()
const {getAllCategories,createCategory,getCategoryById,updateCategory,deleteCategory}=require("../controllers/categoryController")
router.get('/categories',getAllCategories);
router.post('/createcategories',createCategory);
router.get('/getcategories/:id',getCategoryById);
router.put('/upcategories/:id',updateCategory);
router.delete('/deletecategories/:id',deleteCategory);
module.exports=router