const router = require('express').Router();
const {validationResult} = require('express-validator/check');
const errorFormatter = require('../validations/_error-formatter');
const {
  models: {User, Order, Orderitem, Product, Address},
} = require('../../db');

// GET, gets all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [
        // Commented out for the time being because there was too much
        // going on in /api/users.
        // {
        //   model: Address,
        // },
      ],
      order: [['id', 'ASC']],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {id: +req.params.id},
      include: [
        {
          model: Address,
        },
      ],
    });
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
      const userWithCartNo = await createdUser.createCart();
      req.session.userDetails = userWithCartNo;

      // If the user had items in his/her cart prior to signing up,
      // include the items into the database with the orderId being the user's cartNo,
      // which is an orderId.

      if (req.session.cart)
        await Promise.all(
          req.session.cart.map(({id, quantity}) =>
            Orderitem.create({
              orderId: userWithCartNo.cartNo,
              productId: id,
              quantity,
            })
          )
        );

      res.status(201).json(req.session.userDetails);
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
