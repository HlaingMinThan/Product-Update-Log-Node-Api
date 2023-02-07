import express from 'express';
import router from './router';

const app = express();

app.get('/' , (req,res) => {
    console.log('hello from express');
    return res.status(200).json({message : 'hello world'});
})

app.use('/api', router);

export default app;