const express = require('express');
const auth = require('./routes/auth');
const connect = require('./utils/connect');
const cors = require('cors');
const {protect} = require('./mddleware');
connect();
var corsOptionss = {
    origin: 'malachi.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const app = express();
app.use(express.json());
app.use(cors());

//routing
app.get('/check',protect,(req,res)=>{
    res.json({msg: 'controller'})
})
app.use('/auth',auth);



//this method gives instruction on the port the server should listen to
app.listen(6001, function(){
    
    console.log('Server listening on port 6001')
});


