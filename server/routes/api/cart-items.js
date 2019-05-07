const router = require('express').Router();
module.exports = router;

// POST, a user will hit this route when adding a product to the cart.
// The route adds product object to req.session.cart.
router.post('/', (req, res, next) => {
  req.session.cart
    ? req.session.cart.push(req.body)
    : (req.session.cart = [req.body]);

  res.json(req.body);

  // Will need some error handling in this route.
  // For example, return a 400+/500+ code if a product is out of stock.
});
