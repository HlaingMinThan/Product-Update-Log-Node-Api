import db from '../db';

//get all user's products
let getProducts = async (req,res) => {

    let user = await db.user.findUnique({
        where: {
            id : req.user.id //coming from protect middleware
        },
        include : {
            products : true
        }
    });

    return res.status(200).json({data : user.products});
}


//get one product by user
let getProduct = async (req,res) => {
    let id = +req.params.id;

    let product = await db.product.findFirst({
        where : {
            id,
            user_id : req.user.id
        }
    });

    return res.status(200).json({data : product});
}

//create product by user

let createProduct = async (req,res) => {
    let product = await db.product.create({
        data : {
            name :  req.body.name,
            user_id : req.user.id
        }
    });

    return res.status(200).json({data : product});
}

//update product by user
let updateProduct = async (req,res) => {
    let product = await db.product.update({
        where : {
            id_user_id : {
                id : +req.params.id,
                user_id : req.user.id
            }
        },
        data : {
            name :  req.body.name,
            user_id : req.user.id
        }
    });

    return res.status(200).json({data : product});
}

export { getProducts ,getProduct, createProduct , updateProduct};