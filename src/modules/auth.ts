import jwt from 'jsonwebtoken';

let createJWT = (user) => {
    let token = jwt.sign({id : user.id , username : user.username }, process.env.JWT_SECRET);
    return token;
}

export const protect = (req , res , next) => {
    //get and check the bearer exists
    const bearer = req.headers.authorization;
    if(!bearer) {
        return res.status(401).json({ message : 'Not Authorized'});
    }

    //get and check the token exists
    let [ _ , token] = bearer.split(' ')
    if(!token) {
        return res.status(401).json({ message : 'Invalid token'});
    }

    //verify the token valid and handle error not to crash our server
    try {
        let payload = jwt.verify(token , process.env.JWT_SECRET);
        req.user = payload;
        console.log(payload);
        next();
    }catch (e) {
        return res.status(401).json({ message : 'Not Authorized'});
    }

}

export { createJWT };