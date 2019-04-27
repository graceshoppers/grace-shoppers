const router = require('express').Router();
const {
  models: {User},
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({order: [['id', 'ASC']]});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id * 1);
    res.json(user);
  } catch (err) {
    next(err);
  }
});
