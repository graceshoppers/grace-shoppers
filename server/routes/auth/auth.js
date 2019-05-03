const {
  models: {User},
} = require('../../db');
const router = require('express').Router();
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    let error = null;

    if (!user) error = 'No user found with given email.';
    else if (user.password !== password) error = 'Incorrect password.';

    res.send({user: user || {}, error});
  } catch (err) {
    return next(err);
  }
});
