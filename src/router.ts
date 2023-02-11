import { Router } from "express";
import handleError from "./modules/middlewares/handleError";
import { check } from "express-validator";
import { getProducts, getProduct, createProduct, updateProduct , deleteProduct} from './handlers/product';
import { getUpdates, getUpdate, createUpdate, updateUpdate , deleteUpdate} from './handlers/update';

let router = Router();

// Products routes
router.get('/product' , getProducts)
router.post('/product' , check('name').isString() ,handleError, createProduct)
router.get('/product/:id' , getProduct)
router.put('/product/:id' ,check('name').isString() ,handleError, updateProduct)
router.delete('/product/:id' , deleteProduct)

// Updates routes
router.get('/update' , getUpdates)
router.post('/update',[
    check('title').notEmpty().isString(),
    check('body').notEmpty().isString(),
    check('product_id').notEmpty().isNumeric(),
    check('status').optional().isIn([
        'IN_PROGRESS',
        'SHIPPED',
        'DEPRECATED'
    ]),
    check('version').optional().isString(),
    check('asset').optional().isString(),

],handleError, createUpdate)
router.get('/update/:id' , getUpdate)
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
],handleError,updateUpdate)
router.delete('/update/:id' , deleteUpdate)

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