const isAuth  = (req, res, next) =>{
   
    if(req.isAuthenticated()){
       next()
    }else{
       res.json({msg:"you are not authorized to use this route"})
    }
   
   }
   
   module.exports = test