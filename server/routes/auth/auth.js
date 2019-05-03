const {
  models: {User},
} = require('../../db');
const router = require('express').Router();
module.exports = router;

router.post('/login', (req, res, next) => {
  try {
    const {email, password} = req.body;

    res.send({email, password});
  } catch (err) {
    return next(err);
  }
});
