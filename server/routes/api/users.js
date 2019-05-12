const router = require('express').Router();
const {validationResult} = require('express-validator/check');
const errorFormatter = require('../validations/_error-formatter');
const {
  models: {User, Address, Order},
} = require('../../db');

// GET, gets all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Address,
        },
      ],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(+req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//POST, creates a new user
router.post(
  '/',

  // Callback functions using Express Validator
  require('../validations/signup-validations'),

  async (req, res, next) => {
    const errors = validationResult(req);

    // If invalid inputs were received, send out errors.
    // This preliminary validation will potentially reduce the number of times
    // we make calls to database.
    if (!errors.isEmpty())
      return res.status(422).json({errors: errorFormatter(errors.array())});

    try {
      const createdUser = await User.create(req.body);
      req.session.userDetails = createdUser;
      res.status(201).json(createdUser);
    } catch (err) {
      // I need to create a more dynamic error handler.
      // Right now, this handler does not take password errors into account.
      res.status(422).json({errors: {email: [err.message]}});
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
    await User.destroy({where: {id: req.params.id * 1}});
    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
