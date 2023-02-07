import { Router } from "express";

let router = Router();

// Products routes
router.get('/product' , (req,res) => {
    res.send('hi there')
})
router.post('/product' , (req,res) => {
    return res.json(req.body)
})
router.get('/product/:id' , () => {})
router.put('/product/:id' , () => {})
router.delete('/product/:id' , () => {})

// Updates routes
router.get('/update' , () => {})
router.post('/update' , () => {})
router.get('/update/:id' , () => {})
router.put('/update/:id' , () => {})
router.delete('/update/:id' , () => {})

// UpdatePoints routes
router.get('/update-points' , () => {})
router.post('/update-points' , () => {})
router.get('/update-points/:id' , () => {})
router.put('/update-points/:id' , () => {})
router.delete('/update-points/:id' , () => {})

export default router;