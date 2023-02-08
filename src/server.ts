import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser , signIn } from './handlers/user';

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

app.get('/' , (req,res) => {
    console.log('hello from express');
    return res.status(200).json({message : 'hello world'});
})

app.use('/api', protect , router);

app.post('/user',createUser)
app.post('/sign-in',signIn)

export default app;