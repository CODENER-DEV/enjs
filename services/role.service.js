const User = require('../models/User.model');

const updateUser = (async (query, update) => {
    try {
        const user = await User.findOneAndUpdate(query, update, {returnDocument: 'after'});
        return user;
    }
    catch(error){
        return error;
    }
});

module.exports = { updateUser }