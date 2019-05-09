const {validationResult} = require('express-validator/check');
const errorFormatter = require('../validations/_error-formatter');

const {
  models: {User},
} = require('../../db');
const router = require('express').Router();

// Checks if there is a user currently logged in
router.get('/', (req, res, next) => {
  if (!req.session.userDetails) req.session.userDetails = {};
  res.json(req.session.userDetails);
});

// Checks if login credentials match values in database
router.post(
  '/login',

  // Preliminary validations to potentially reduce the number of
  // calls to the database.
  require('../validations/login-validations'),

  async (req, res, next) => {
    const errors = validationResult(req);

    // If preliminary validations fail, break out of this function
    if (!errors.isEmpty())
      return res.status(400).json({errors: errorFormatter(errors.array())});

    try {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});

      // I will need to restructure the error handling
      if (!user)
        res.status(400).json({
          errors: {email: ['There is no account with associated email.']},
        });
      else if (user.password !== password)
        res.status(400).json({
          errors: {password: ['Incorrect password']},
        });
      else {
        req.session.userDetails = user;
        res.json(user);
      }
    } catch (err) {
      return next(err);
    }
  }
);

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
