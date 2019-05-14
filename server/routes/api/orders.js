const router = require('express').Router();
const {
  models: {Order, Orderitem, Product, User, Address},
} = require('../../db');
const Sequelize = require('sequelize');

module.exports = router;

// GET, gets all orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [User, Address],
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

// POST, changes status of order of 'Cart' to 'Processing'
// creates a new order for the cart
router.post('/', async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: {
        [Sequelize.Op.and]: [
          {userId: req.session.userDetails.id},
          {status: 'Cart'},
        ],
      },
    });

    await Order.update({status: 'Processing'}, {where: {id: userCart.id}});

    await Order.create({
      status: 'Cart',
      userId: req.session.userDetails.id,
    });

    const newOrder = await Order.findOne({
      where: {
        id: userCart.id,
      },
      include: [Orderitem],
    });

    req.session.cart = [];

    res.status(201).json(newOrder);
  } catch (err) {
    next(err);
  }
});

// PUT, updates a order
router.put('/:id', async (req, res, next) => {
  try {
    await Order.update(req.body, {where: {id: req.params.id * 1}});
    const updatedOrder = await Order.findAll({
      where: {id: req.params.id * 1},
      include: [User, Address],
    });
    res.status(200).json(updatedOrder[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE, deletes a order
router.delete('/:id', async (req, res, next) => {
  try {
    await Order.destroy({where: {id: req.params.id * 1}});
    res.json({});
  } catch (err) {
    next(err);
  }
});
