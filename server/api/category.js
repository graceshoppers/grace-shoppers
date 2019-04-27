const router = require('express').Router();
const {
  models: {Category},
} = require('../db');

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
    const category = await Category.findByPk(req.params.id*1);
    res.status(200).json(category)
  } catch (err) {
    next(err);
  }
});

router.post('/', async(req,res,next)=>{
  try{
    const createdCategory = await Category.create(req.body);
    res.status(201).json(createdCategory)
  }catch(err){
    next(err)
  }
})
