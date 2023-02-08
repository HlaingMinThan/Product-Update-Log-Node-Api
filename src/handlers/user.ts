import { comparePasswords, createJWT, hashPassword } from '../modules/auth';
import Prisma from '../db';

//register
let createUser = async (req,res) => {
    let user = await Prisma.user.create({
        data : {
            username : req.body.username,
            password : await hashPassword(req.body.password)
        }
    })

    return res.status(201).json({token :  createJWT(user)});
}


//SiginIn
let signIn = async (req,res) => {
    //get the user with username
    let user = await Prisma.user.findUnique( {
        where : {
            username : req.body.username
        }
    });

    //check is the password valid ?
    let isPasswordValid = await comparePasswords(req.body.password , user.password);
    if (!isPasswordValid){
        return res.status(401).json({message : 'password is invalid'});
    }

    return res.json(user);

}

export {createUser , signIn};