const router = require('express').Router();
const {
  models: {Product, Category},
} = require('../../db');

module.exports = router;

// GET, gets all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']],
      include: [Category],
    });

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

// POST, creates a new product
router.post('/', async (req, res, next) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    next(err);
  }
});

// PUT, updates a product
router.put('/:id', async (req, res, next) => {
  try {
    await Product.update(req.body, {where: {id: req.params.id * 1}});
    const updatedProduct = await Product.findByPk(req.params.id * 1);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

// DELETE, deletes a product
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByPk(req.params.id);
    await Product.destroy({where: {id: req.params.id}});

    res
      .status(200)
      .json({message: 'Deleted product successfully.', deletedProduct});
  } catch (err) {
    next(err);
  }
});
