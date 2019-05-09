const {validationResult} = require('express-validator/check');
const errorFormatter = require('../validations/_error-formatter');

const {
  models: {User},
} = require('../../db');
const router = require('express').Router();

// Checks if there is a user currently logged in
router.get('/', (req, res, next) => {
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

    if (!errors.isEmpty())
      return res.status(400).json({errors: errorFormatter(errors.array())});

    try {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});

      if (user.password === password) res.json(user);
      else res.status(400).send({errors: ['Something went wrong']});
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
