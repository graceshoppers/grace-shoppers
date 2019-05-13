const {validationResult} = require('express-validator/check');
const errorFormatter = require('../validations/_error-formatter');
const Sequelize = require('sequelize');

const {
  models: {User, Order, Address, Orderitem, Product},
} = require('../../db');
const router = require('express').Router();

// Checks if there is a user currently logged in
router.get('/', (req, res, next) => {
  if (!req.session.userDetails) req.session.userDetails = {};
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

    // If preliminary validations fail, break out of this function
    if (!errors.isEmpty())
      return res.status(400).json({errors: errorFormatter(errors.array())});

    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where: {email},
        include: [
          {
            model: Order,
            include: [{model: Orderitem, include: [{model: Product}]}],
          },
          {model: Address},
        ],
      });

      // I will need to restructure the error handling
      if (!user)
        return res.status(400).json({
          errors: {email: ['There is no account with associated email.']},
        });
      else if (user.password !== password)
        return res.status(400).json({
          errors: {password: ['Incorrect password']},
        });
      else {
        req.session.userDetails = user;
        const cart = await Order.findOne({
          where: {[Sequelize.Op.and]: [{userId: user.id}, {status: 'Cart'}]},
        });

        // If the user added items to cart prior to logging in,
        // append all of the items into their existing cart in the database.
        if (req.session.cart && req.session.cart.length)
          await Promise.all(
            req.session.cart.map(({id, quantity}) =>
              Orderitem.create({
                orderId: cart.id,
                productId: id,
                quantity,
              })
            )
          );

        // Retrieve the latest cart information for logged in user
        const updatedCart = await Order.findOne({
          where: {userId: user.id},
          include: [{model: Orderitem, include: [Product]}],
        });

        req.session.cart = updatedCart.orderitems.map(item => {
          return {...item.product.get(), quantity: item.quantity};
        });

        res.json(req.session.userDetails);
      }
    } catch (err) {
      next(err);
    }
  }
);

router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
