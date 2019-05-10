const {check} = require('express-validator/check');

// Input fields that are required in the SignUp component
const requiredFields = ['firstName', 'lastName', 'password', 'confirmPassword'];

const checkRequiredFields = requiredFields.map(field =>
  check(field, 'This field is required.')
    .not()
    .isEmpty()
);

// Exports an array where each element is a callback function to be called
// in the POST route of /api/users

module.exports = [
  ...checkRequiredFields,

  // Checks if email input is in email format
  check('email', 'Please enter a valid email address.').isEmail(),

  // Checks length of password
  check('password', 'Password must be more than 4 characters.').isLength({
    min: 5,
  }),

  // Checks if passwords are equal
  check('password', 'Passwords must match.').custom(
    (value, {req}) => value === req.body.confirmPassword
  ),

  check('confirmPassword', 'Passwords must match.').custom(
    (value, {req}) => value === req.body.password
  ),
];
