const router = require('express').Router();
const {
  models: {Category},
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({order: [['id', 'ASC']]});
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id*1);
    res.json(category)
  } catch (err) {
    next(err);
  }
});
