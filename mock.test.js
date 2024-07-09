
//mock getData and process
jest.mock('./test/utils',()=>(
    {getdata:jest.fn(),}
))

const {getdata}=require('./test/utils')
const processData=require('./test/processData')
//mock return value->
test('Mock the process data',()=>{
    //mock the return value 
    getdata.mockReturnValue('Mocked data')
    expect(processData()).toBe('Processed:Mocked data')
})