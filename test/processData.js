const {getdata}=require('./utils')

function processData(){
    return `Processed:${getdata()}`;
    //processed real data
}
module.exports=processData;