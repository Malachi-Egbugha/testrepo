const express = require('express');
const router = express.Router();
const {registration,login} = require('../controllers/auth');
router.get("/dashboard",(req,res)=>{
    res.send('hello world');

})

router.post("/register", registration);
router.post("/login", login);


module.exports=router;