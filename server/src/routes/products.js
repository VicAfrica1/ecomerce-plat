import express from 'express';
const router = express.Router();
let products = [{id:1,name:'Sample Product',price:49.99,stock:10,image:'/uploads/sample.jpg',available:true}];

router.get('/', (req,res)=>res.json(products));
router.post('/', (req,res)=>{const p={id:Date.now(),...req.body,available:true};products.push(p);res.status(201).json(p);});
router.put('/:id', (req,res)=>{const idx=products.findIndex(x=>x.id==req.params.id);if(idx===-1)return res.sendStatus(404);products[idx]={...products[idx],...req.body};res.json(products[idx]);});
router.delete('/:id', (req,res)=>{products=products.filter(x=>x.id!=req.params.id);res.sendStatus(204);});
export default router;
