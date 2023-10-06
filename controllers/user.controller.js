const userService = require('../services/user.service');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Schema object User login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required().alphanum()
});

// Schema object User register
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required().alphanum()
});

/**
 * getUser controller communicates with the service - get user with email, validate and get Token with JWT
 * @param {Object} req - request user data
 * @param {Object} res  - response
 * @returns {Object} user and token
 */
const getUser = (async (req, res) => {
    const { error } = schemaLogin.validate(req.body);
    const password = req.body.password;

    if(error){
        return res.status(400).json({error: error.details[0].message});
    }
    
    const user = await userService.getUser({email: req.body.email});
    if(!user){
        return res.status(400).json({error: 'User does not exist, try another'});
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(400).json({error: 'Password is invalid'});
    }

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET,
    {
        expiresIn: '240s'
    });

    res.header('Auth-Token', token).status(200).json({success: 'Valid user', user, token});
});

/**
 * createUser controller communicates with the service - create user with name, email and password, validate and encrypt password with BCrypt
 * @param {Object} req - request user data
 * @param {Object} res  - response
 * @returns {Object} user
 */
const createUser = (async (req, res) => {
    const { error } = schemaRegister.validate(req.body);
    const password = req.body.password;
    
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    const isEmailExist = await userService.getUser({email: req.body.email});
    if(isEmailExist){
        return res.status(400).json({error: 'Email already exists, try another'});
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const result = await userService.createUser({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        res.status(200).json({success: 'Saved user', user: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

module.exports = { getUser, createUser }