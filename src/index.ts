import app from './server';
import dotEnv from 'dotenv';
dotEnv.config();

// setup prisma with typescript reference -> https://www.prisma.io/docs/getting-started/quickstart
// run migrations -> npx prisma migrate dev --name init -> this will craete migration & generate prisma client & install

app.listen(3001, () => {
    console.log('hello my app localhost:'+3001);
})
console.log(process.env.JWT_SECRET)