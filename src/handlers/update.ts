import db from "../db"

//get user's products's updates
let getUpdates = async (req,res) => {
    let products  = await db.product.findMany({
        where : {
            user_id : +req.user.id
        },
        include : {
            updates : true
        }
    });
    return res.status(200).send({data : products.map(product => product.updates)});
}

let getUpdate = async (req,res) => {
    let update = await db.update.findUnique({
        where : {
            id : +req.params.id
        }
    })

    return res.status(200).send({data : update});
}
let createUpdate = (req,res) => {

}
let updateUpdate = (req,res) => {

}
let deleteUpdate = (req,res) => {

}


export { getUpdates, getUpdate, createUpdate, updateUpdate , deleteUpdate}