const router = require('express').Router();
module.exports=router;

//redirect to the right api
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
router.use('/users', require('./users'));
router.use('/reviews', require('./reviews'));
router.use('/orders', require('./orders'));

router.use((req, res, next) => {
  res.status(404).send('API Not Found');
});
