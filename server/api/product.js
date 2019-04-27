const router = require('express').Router();
const {
  models: {Product},
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({order: [['id', 'ASC']]});
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id * 1);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await Product.update(req.body, {where: {id: req.params.id * 1}});
    const updatedProduct = Product.findByPk(req.params.id * 1);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});
