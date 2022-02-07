exports.succes = function(req,res,message,status){
    let statusCode = status || 200;
    let statusMessage = message || ''
    res.status(status).send({
        error:false,
        status:status,
        body: message
    })
}

exports.error = function(req,res,message,status){
    let statusCode = status || 500;
    let statusMessage = message || 'Internal erver error'
    res.status(statusCode).send({
        error:false,
        status:status,
        body: message
    })
}