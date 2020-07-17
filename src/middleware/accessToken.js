const jwt = require('jsonwebtoken');
const config = require('@config/index');

//format
//authorization: Bearer <token> 
const verifyToken = (req, res, next) => {

    //get auth header value
    const bearerHeader = req.headers['authorization']

    if (bearerHeader) {

        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        jwt.verify(token, config.jwt.secret, (error, data) => {
            if (error) {
                res.sendStatus(403);
            }
            req.token = token;
            req.user = data;
        })
        next();
    } else {
        //forbidden
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken
}