const router = require('express').Router();
const {
  models: {User},
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({order: [['id', 'ASC']]});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id * 1);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdUser = await Category.create(req.body);
    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
});
