let dataSets=[];
//executee my env before all
beforeAll(()=>{
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log('before each setup is called')
})
afterEach(()=>{
    console.log('After Each Setup is called')
})
afterAll(()=>{
    dataSets=[];

})
test('Test case',()=>{
    expect(dataSets.length).toBe(2);
})
test('data set contains',()=>{
    expect(dataSets).toContain('ram');
})
test('data set contains',()=>{
    expect(dataSets).toContain('raju');
})