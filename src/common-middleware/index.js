const jwt = require('jsonwebtoken')
 
exports.requireSignin = (req, res, next) => {

  if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    // console.log(token);
  }
  else{
    return res.status(400).json({message:'Authorization required'})
  }
  
  next();
};

// User middleware
exports.userMiddleware = (req,res,next) => {
  if(req.user.role !=='user'){
    return res.status(400).json({message: 'User access denied'})
  }
  next();
}

// Admin middleware
exports.adminMiddleware = (req,res,next) => {
  if(req.user.role !=='admin'){
    return res.status(400).json({message: 'Admin access denied'})
  }
  next();
}