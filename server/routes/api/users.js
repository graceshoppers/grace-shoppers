const router = require('express').Router();
const {validationResult} = require('express-validator/check');
const {
  models: {User},
} = require('../../db');

module.exports = router;

// GET, gets all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({order: [['id', 'ASC']]});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// GET, gets one user using user's id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id * 1);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//POST, creates a new user
router.post(
  '/',

  // Callback functions using Express Validator
  require('./validations/signup-validations'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const createdUser = await User.create(req.body);
      res.status(201).json(createdUser);
    } else {
      const errorFormatter = errorArray =>
        errorArray.reduce((acc, {param, msg}) => {
          if (acc[param]) acc[param].push(msg);
          else acc[param] = [msg];
          return acc;
        }, {});
      res.status(422).json({errors: errorFormatter(errors.array())});
    }
  }
);

router.put('/:id', async (req, res, next) => {
  try {
    await User.update(req.body, {where: {id: req.params.id * 1}});
    const updatedUser = await User.findByPk(req.params.id * 1);
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedUser = await User.findByPk(req.params.id);
    await User.destroy({where: {id: req.params.id}});

    res.status(200).json({message: 'Deleted user successfully.', deletedUser});
  } catch (err) {
    next(err);
  }
});
