import db from "../db"

//get user's products's updates
let getUpdates = async (req,res) => {
    let updates  = await db.update.findMany({
        where : {
            product : {
                user_id : +req.user.id
            }
        }
    });
    return res.status(200).send({data : updates});
}

let getUpdate = async (req,res) => {
    let update = await db.update.findUnique({
        where : {
            id : +req.params.id
        }
    })

    return res.status(200).send({data : update});
}
//create user's product's update
let createUpdate = async (req,res) => {
    const product = await db.product.findUnique({
            where : {
                id_user_id:{
                    id : +req.body.product_id,
                    user_id : req.user.id
                }
            }
    });

    if(!product) {
        //does not belong to you.
        return res.status(401).send('nope,does not belong to you');
    }

    const update = await db.update.create( {
            data : {
                ...req.body,
                product_id : +req.body.product_id,//override and cast it
            } // we can trust bc we validate first
    })

    return res.status(201).json({data : update});
}

//update user's product's update
let updateUpdate = async (req,res) => {
    let update = await db.update.findFirst({
        where : {
            id : +req.params.id,
            product : {
                id : {
                    equals : +req.body.product_id
                },
                user_id : {
                    equals : +req.user.id
                }
            }
        }
    });
    if(! update ) {
        return res.status(401).send('nope,does not belong to you');
    }

const updatedUpdate = await db.update.update( {
            where : {
                id : +req.params.id
            },
            data : {
                ...req.body,
                product_id : +req.body.product_id
            } // we can trust bc we validate first
    });

    return res.status(201).json({data : updatedUpdate})
}

//delete user's product's update
let deleteUpdate = async (req,res) => {
    let update = await db.update.findFirst({
        where : {
            id : +req.params.id,
            product : {
                id : {
                    equals : req.body.product_id
                },
                user_id : {
                    equals : req.user.id
                }
            }
        }
    });
    if(! update ) {
        return res.status(401).send('nope,does not belong to you');
    }
    const updatedUpdate = await db.update.delete( {
        where : {
            id : +req.params.id
        },
    });

    return res.status(201).json({message : "update deleted",data : updatedUpdate});
}

export { getUpdates, getUpdate, createUpdate, updateUpdate , deleteUpdate}