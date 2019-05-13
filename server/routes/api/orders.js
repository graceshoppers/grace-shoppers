const router = require('express').Router();
const {
  models: {Order, User, Address},
} = require('../../db');

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

// POST, creates a new order
router.post('/', async (req, res, next) => {
  try {
    const createdOrder = await Order.create(req.body);
    res.status(201).json(createdOrder);
  } catch (err) {
    next(err);
  }
});

// PUT, updates a order
router.put('/:id', async (req, res, next) => {
  try {
    await Order.update(req.body, {where: {id: req.params.id * 1}});
    const updatedOrder = await Order.findAll({where:{id:req.params.id * 1},include:[User, Address]});
    res.status(200).json(updatedOrder[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE, deletes a order
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedOrder = await Order.findByPk(req.params.id * 1);
    await Order.destroy({where: {id: req.params.id * 1}});

    res
      .status(200)
      .json({message: 'Deleted order successfully.', deletedOrder});
  } catch (err) {
    next(err);
  }
});
