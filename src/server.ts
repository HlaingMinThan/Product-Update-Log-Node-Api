import express from 'express';
import router from './router';
import morgan from 'morgan';

const app = express();

// order matters
app.use(morgan('dev')); 

//thanks express offically support this now
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/' , (req,res) => {
    console.log('hello from express');
    return res.status(200).json({message : 'hello world'});
})

app.use('/api', router);

export default app;