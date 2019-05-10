// To be used with Express Validator's validationResult(req).array()

// Example return of errorFormatter
//
//   {
//       email: ['This field is required.', 'Please enter a valid email address.'],
//       password: ['Password must be longer than 4 characters.']
//   }

const errorFormatter = errorArray =>
  errorArray.reduce((acc, {param, msg}) => {
    if (acc[param]) acc[param].push(msg);
    else acc[param] = [msg];
    return acc;
  }, {});

module.exports = errorFormatter;
