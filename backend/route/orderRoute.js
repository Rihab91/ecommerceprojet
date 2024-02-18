const express=require("express")
const router=express.Router()
const{CreateOrder,getAllOrders,getOrderById,updateOrder,deleteOrder}=require("../controllers/orderController")
// Route pour créer une nouvelle commande
router.post('/order', CreateOrder);
router.put('/update/:id', updateOrder);
router.get('/getorder/:id',getOrderById);
router.get('getall',getAllOrders);
router.delete('/delete/:id',deleteOrder);

module.exports=router