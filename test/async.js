//how to perform unit tests on async functions 
//function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}

function MyData(callback){
    setTimeout(()=>{
        callback({id:1001});
    },1000)
}
//calls admin after 1 seconds
module.exports = {fetchData,MyData};