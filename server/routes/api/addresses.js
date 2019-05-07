const router = require('express').Router();
const {
  models: {Address},
} = require('../../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const addresses = await Address.findAll({order: [['id', 'ASC']]});
    res.status(200).json(addresses);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdAddress = await Address.create(req.body);
    res.status(201).json(createdAddress);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await Address.update(req.body, {
      where: {id: req.params.id * 1},
    });
    const updatedAddress = await Address.findByPK(req.params.id * 1);
    res.status(200).json(updatedAddress);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedAddress = await Address.findByPK(req.params.id * 1);
    await Address.destroy({where: {id: req.params.id * 1}});
    res
      .status(200)
      .json({message: 'Deleted address successfully.', deletedAddress});
  } catch (err) {
    next(err);
  }
});