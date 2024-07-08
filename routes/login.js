const express = require('express');
const router=express.Router();
router.get('/login',(req,res,next)=>{
    res.send(`<h1>This is your login page</h1>`)
})
module.exports=router;