import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser , signIn } from './handlers/user';
import db from './db';
import { check } from 'express-validator';
import handleError from './modules/middlewares/handleError';

const app = express();

// this pattern is used behind the scene of a express middleware package like morgan
let customLogger = (message) => (req,res,next) => {
    console.log('welcome from '+ message)
    next()
}

// order matters
app.use(cors()); 
app.use(morgan('dev')); 
app.use(customLogger('CUSTOM LOGGER')); // app wide middleware

//thanks express offically support this now
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//error handling example test case (sync,async error)
// app.get('/',(req,res,next) => {
//     // throw new Error('sync error');//sync erorr -> express will handle for this case
//     setTimeout(() => {
//         next(new Error('async error'));//async erorr -> need to tell express that we got error with next param
//     }, 1);
// })

app.get('/' , (req,res) => {
    return res.status(200).json({message : 'hello world'});
})

app.use('/api', protect , router);

app.post('/user', 
    [
        //check email already exists
        check('username').notEmpty().custom(async (value) => {
            if(value){
                let user = await db.user.findUnique({
                    where : {
                        username : value
                    }
                })
                if (user) {
                    throw new Error('E-mail already in use');
                }
            }
        }),
        //check pw less than 5 chars
        check('password').notEmpty().isLength({ min: 5 }).withMessage('must be at least 5 chars long')
    ] ,
    handleError,
    createUser)
app.post('/sign-in',[
    //check pw less than 5 chars
    check('password').notEmpty().isLength({ min: 5 }).withMessage('must be at least 5 chars long')
],handleError,signIn)


//add error handler middleware **at the end of the routes** to handle every incoming errors above
app.use((err,req,res,next) => {
    return res.json({message : err.message})
})

export default app;