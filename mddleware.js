const jwt = require('jsonwebtoken');
const authmodel = require("./models/auth");
exports.protect = async(req,res,next) =>{
    let token;
    //check if token is contain in the header
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        //extract token
        token = req.headers.authorization.split(" ")[1]

    }

    
    //check the presence of token
    if(!token){
        return res.status(403).json({error: "Unauthorise User", status: false});
    }
    try{
        //Verify token
        const decoded = jwt.verify(token, 'w{v{<J2e&$x[/<V#&#G:?Ti?Frv+-O');
        //req.user = await authmodel.findById(decoded.id);
        next();

    }
    catch(error){
        return res.status(403).json({ error: "Unauthorise Users", status: false });

    }
    
}