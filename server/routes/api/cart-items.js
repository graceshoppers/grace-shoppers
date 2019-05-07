const router = require('express').Router();
module.exports = router;

// POST, a user will hit this route when adding a product to the cart.
// The route adds product object to req.session.cart.
router.post('/', (req, res, next) => {
  console.log(req.session);
  res.send('hi');
});
