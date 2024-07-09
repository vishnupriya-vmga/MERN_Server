const app=require('./index');
const request=require('supertest')
describe('/get users',()=>{
    test('get users fro /user api',async ()=>{
        const res=await request(app)
        .get('/users')
        .expect(200);
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('id')
            expect(user).toHaveProperty('name')
        })

    })
})