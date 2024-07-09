const {fetchData,MyData} = require('./test/async')


test('Callback Data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(err){
            done(err);
        }
    }
    fetchData(callback);
})

test('Callback MyData',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(1001);
            done();
        }catch(err){
            done(err);
        }
    } 
    MyData(callback);
})

test("Mocking callback function",done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin');
        done();
    })
    fetchData(MockFunction);
})