const express = require('express');
//allows us separate the routes from our main server.js file
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modules/User');

//@route   GET api/auth
//@desc    Test route
//@access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
