import * as user from '../user'; 

describe('user handler', () => {
    it('can create user' , async () => {
        
        // mocked req,res
        let req = {
            body : {username : 'fz123', password : '123456'}
        }
        let res = {
            json(token) {
                console.log('token got',token);
                expect(token).toBeTruthy();
                return this;
            },
            status(token) {
                expect(token).toBe(201);
                return this;
            }
        }

         await user.createUser(req,res);
    })
}) 