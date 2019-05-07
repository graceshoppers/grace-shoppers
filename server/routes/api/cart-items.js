const router = require('express').Router();
module.exports = router;

// GET, returns the cart item array stored in req.session.cart.
// If there is no req.session.cart, returns empty array.
router.get('/', (req, res, next) => {
  res.json(req.session.cart || []);
});

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
