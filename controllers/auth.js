const authmodel = require("../models/auth");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.registration = async (req,res) =>{
try{
        const salt = await bcrypt.genSalt(10);

        const hasspasswords = await bcrypt.hash(req.body.password, salt);
        req.body.passwords = hasspassword;
        userss = await authmodel.create(req.body);
        res.json({userss});

        const hasspasswordss = await bcrypt.hash(req.body.password, salt);
        req.body.password = hasspassword;
        user = await authmodel.create(req.body);
        res.json({user});

}
catch(e){
        console.log(e)
}


}
exports.login = async (req,res) =>{
        const {email, password} = req.body;
        //check if user enter email and password
        if(!email || !password){
                return res.status(403).json({status: false,msg:"Please Provide Email and Password"} );
            } 
        //check if email exit in databae
        const user = await authmodel.findOne({email});
        if(!user){
                return res.status(500).json({status: false, msg: 'user with this email does not exit'});

        }
        //check if password are equal
        
       const ispasswordcorect = await bcrypt.compare(password,user.password);
       if(ispasswordcorect){
        const token= await jwt.sign({email,id: user._id}, 'w{v{<J2e&$x[/<V#&#G:?Ti?Frv+-O',{expiresIn:"1d"});
        res.status(200).json({token, status: true});


       }
       else{
        res.status(500).json({status: false, msg: 'Password is incorrect'});

       }
      

      
        //if user exit i return a token
        //else i return error message

}

