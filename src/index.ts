import app from './server';

// setup prisma with typescript reference -> https://www.prisma.io/docs/getting-started/quickstart

app.listen(3001, () => {
    console.log('hello my app localhost:'+3001);
})