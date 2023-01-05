const errorHandler = (err, req, res, next)=>{

    if(err){
        
        res.json({err : err})
    }
}

module.exports = errorHandler