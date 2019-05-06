const router = require('express').Router();
const {
  models: {Orderitem, Product, Order},
} = require('../db');


module.exports = router;

// GET, gets all orderitems
router.get('/', async (req, res, next) => {
  try {
    const orderitems = await Orderitem.findAll({
      include: [Product, Order],
    });

    res.status(200).json(orderitems);
  } catch (err) {
    next(err);
  }
});

// POST, creates a new orderitem
router.post('/', async (req, res, next) => {
  try {
    const createdOrderitem = await Orderitem.create(req.body);
    res.status(201).json(createdOrderitem);
  } catch (err) {
    next(err);
  }
});

// PUT, updates a orderitem
router.put('/:id', async (req, res, next) => {
  try {
    await Orderitem.update(req.body, {where: {id: req.params.id * 1}});
    const updatedOrderitem = await Orderitem.findByPk(req.params.id * 1);
    res.status(200).json(updatedOrderitem);
  } catch (err) {
    next(err);
  }
});

// DELETE, deletes a orderitem
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedOrderitem = await Orderitem.findByPk(req.params.id);
    await Orderitem.destroy({where: {id: req.params.id}});

    res
      .status(200)
      .json({message: 'Deleted orderitem successfully.', deletedOrderitem});
  } catch (err) {
    next(err);
  }
});
