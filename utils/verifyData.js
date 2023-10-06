const jwt = require('jsonwebtoken');

/**
 * verifyToken - verify Token with JWT if is required token, is valid o already expired
 * @param {Object} req - request token
 * @param {Object} res  - response
 * @returns {Object} is required token, is valid o already expired
 */
const verifyToken = (req, res, next) => {
    const token = req.header('Auth-Token');
    if(!token){
        return res.status(401).json({error: 'Token authentication required', type: 'tar'});
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(error){
        res.status(400).json({error: 'Access denied, token is invalid or has already expired', type: 'adtiae'})
    }
}

module.exports = verifyToken;