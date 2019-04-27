const router = require('express').Router();
const {
  models: {Product},
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({order: [['id', 'ASC']]});
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id * 1);
    res.json(product);
  } catch (err) {
    next(err);
  }
});
