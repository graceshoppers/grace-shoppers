const router = require('express').Router();
const {
  models: {Category},
} = require('../../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({order: [['id', 'ASC']]});
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id * 1);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdCategory = await Category.create(req.body);
    res.status(201).json(createdCategory);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await Category.update(req.body, {where: {id: req.params.id * 1}});
    const updatedCategory = await Category.findByPk(req.params.id * 1);
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCategory = await Category.findByPk(req.params.id * 1);
    await Category.destroy({where: {id: req.params.id * 1}});

    res
      .status(200)
      .json({message: 'Deleted category successfully.', deletedCategory});
  } catch (err) {
    next(err);
  }
});
