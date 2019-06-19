const express = require('express');

//allows us separate the routes from our main server.js file
const router = express.Router();

//@route   GET api/posts
//@desc    Test route
//@access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
