const roleService = require('../services/role.service');
const Joi = require('@hapi/joi');

// Schema object User
const schemaRole = Joi.object({
    role: Joi.string().min(4).max(255).required()
});

/**
 * updateUser controller communicates with the service - update user with _id
 * @param {Object} req - request user data
 * @param {Object} res  - response
 * @returns {Object} user
 */
const updateUser = (async (req, res) => {
    const { error } = schemaRole.validate(req.body);
    
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    try {
        // const result = await roleService.updateUser({email: req.body.email},
        const result = await roleService.updateUser({_id: req.params.uid},
        {
            role: req.body.role
        });
        res.status(200).json({success: 'Update user', user: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

module.exports = { updateUser }