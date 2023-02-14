import request from 'supertest'
import app from '../server';

// console.log(request,'imported');

describe('GET /', () => {
    it('can do something',async () => {
        let res =await request(app).get('/');
        expect(res.body.message).toBe("hello world");
    })
}) 