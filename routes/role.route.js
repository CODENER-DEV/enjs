const router = require('express').Router();
const  { updateUser } = require('../controllers/role.controller');

// Routes of Roles
router.put('/role/:uid', updateUser);

module.exports = router;