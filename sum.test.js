const sum=require('./test/sum')
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
})
test ('objects in array',()=>{
    const data ={one:1}
    data['two'] = 2;
    expect(data).toEqual({one:1 , two:2});
 })
 test('value is null',()=>{
    const n=null;
    expect(n).toBeNull();
 })
test('value is defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
test('value is truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})
test('value is false',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})
