const express = require('express');

//allows us separate the routes from our main server.js file
const router = express.Router();

//@route   GET api/profile
//@desc    Test route
//@access  Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
