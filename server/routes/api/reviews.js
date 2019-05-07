const router = require('express').Router();
const {
  models: {Review, Product, User},
} = require('../../db');

module.exports = router;

// GET, gets all reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [Product, User],
    });

    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
});

// POST, creates a new review
router.post('/', async (req, res, next) => {
  try {
    const createdReview = await Review.create(req.body);
    res.status(201).json(createdReview);
  } catch (err) {
    next(err);
  }
});

// PUT, updates a review
router.put('/:id', async (req, res, next) => {
  try {
    await Review.update(req.body, {where: {id: req.params.id * 1}});
    const updatedReview = await Review.findByPk(req.params.id * 1);
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
});

// DELETE, deletes a review
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedReview = await Review.findByPk(req.params.id * 1);
    await Review.destroy({where: {id: req.params.id * 1}});

    res
      .status(200)
      .json({message: 'Deleted review successfully.', deletedReview});
  } catch (err) {
    next(err);
  }
});
