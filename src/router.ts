import { Router } from "express";
import handleError from "./modules/middlewares/handleError";
import { check } from "express-validator";

let router = Router();

// Products routes
router.get('/product' , (req,res) => {
    res.send('hi there')
})
router.post('/product' , check('name').isString() ,handleError,(req,res) => {
    return res.json(req.body)
})
router.get('/product/:id' , () => {})
router.put('/product/:id' ,check('name').isString() ,handleError, () => {})
router.delete('/product/:id' , () => {})

// Updates routes
router.get('/update' , () => {})
router.post('/update',[
    check('title').notEmpty().isString(),
    check('body').notEmpty().isString(),
    check('status').optional().isIn([
        'IN_PROGRESS',
        'SHIPPED',
        'DEPRECATED'
    ]),
    check('version').optional().isString(),
    check('asset').optional().isString(),

],handleError, () => {})
router.get('/update/:id' , () => {})
router.put('/update/:id' , [
    check('title').optional().isString(),
    check('body').optional().isString(),
    check('status').optional().isIn([
        'IN_PROGRESS',
        'SHIPPED',
        'DEPRECATED'
    ]),
    check('version').optional().isString(),
    check('asset').optional().isString(),
],handleError,() => {})
router.delete('/update/:id' , () => {})

// UpdatePoints routes
router.get('/update-points' , () => {})
router.post('/update-points' ,[
    check('name').notEmpty().isString(),
    check('description').notEmpty().isString(),
    check('update_id').notEmpty().isString(),
] ,handleError,() => {})
router.get('/update-points/:id' , () => {})
router.put('/update-points/:id' , () => {})
router.delete('/update-points/:id' , () => {})

export default router;