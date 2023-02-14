import app from './server';
import dotEnv from 'dotenv';
dotEnv.config();
import config from './config';

// setup prisma with typescript reference -> https://www.prisma.io/docs/getting-started/quickstart
// run migrations -> npx prisma migrate dev --name init -> this will craete migration & generate prisma client & install
//create gui prisma db -> npx prisma stuido

app.listen(config.port, () => {
    console.log('hello my app localhost:'+config.port);
})
console.log(process.env.JWT_SECRET)