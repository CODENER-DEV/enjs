const router = require('express').Router();
const  { getUser, createUser } = require('../controllers/user.controller');

// Routes of Users
router.post('/login', getUser);

router.post('/register', createUser);

module.exports = router;