const User = require('../models/User.model');

const getUser = (async (query) => {
    const user = await User.findOne(query);
    return user;
});

const createUser = (async (query) => {
    try {
        const user = await User.create(query);
        return user;
    }
    catch(error){
        return error;
    }
});

module.exports = { getUser, createUser }