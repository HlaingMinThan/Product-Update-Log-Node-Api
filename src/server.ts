import express from 'express';

const app = express();

app.get('/' , (req,res) => {
    console.log('hello from express');
    return res.status(200).json({message : 'hello world'});
})

export default app;