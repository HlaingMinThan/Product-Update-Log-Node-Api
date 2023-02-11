import db from "../db"

let getUpdates = async (req,res) => {
    //first way
    // let updates = await db.update.findMany({
    //     where : {
    //         product_id : +req.body.product_id
    //     }
    // });
    let product = await db.product.findUnique({
        where : {
            id : +req.body.product_id
        },
        include : {
            updates : true
        }
    });

    return res.status(200).send({data : product.updates});
}

let getUpdate = (req,res) => {

}
let createUpdate = (req,res) => {

}
let updateUpdate = (req,res) => {

}
let deleteUpdate = (req,res) => {

}


export { getUpdates, getUpdate, createUpdate, updateUpdate , deleteUpdate}