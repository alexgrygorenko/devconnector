const express = require('express');

//allows us separate the routes from our main server.js file
const router = express.Router();

//@route   GET api/auth
//@desc    Test route
//@access  Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
