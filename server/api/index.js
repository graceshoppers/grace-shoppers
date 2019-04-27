const router = require('express').Router();
module.exports=router;

//redirect to the right api
router.use('/product', require('./product'));
router.use('/category', require('./category'));
router.use('/user', require('./user'));

router.use((req, res, next) => {
  res.status(404).send('API Not Found');
});
