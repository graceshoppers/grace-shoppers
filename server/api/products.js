const router = require('express').Router();
const {
  models: {Product},
  methods: {searchProducts, getProductsByCategory},
} = require('../db');

module.exports = router;

// GET, gets all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({order: [['id', 'ASC']]});
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

// GET, gets one product
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id * 1);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// GET, gets all products by specified category
router.get('/by-category/:category', async (req, res, next) => {
  try {
    const categoryAndProducts = await getProductsByCategory(
      req.params.category
    );
    res.status(200).json(categoryAndProducts.products);
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
    const updatedProduct = await Product.findByPk(req.params.id * 1);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

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

// Route to search products
router.get('/search/:searchTerm', async (req, res, next) => {
  try {
    const searchResults = await searchProducts(req.params.searchTerm);
    res.status(200).json(searchResults);
  } catch (err) {
    next(err);
  }
});
