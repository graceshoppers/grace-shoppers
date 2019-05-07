const router = require('express').Router();
module.exports = router;

// ==================================================
// GET, returns the cart item array stored in req.session.cart.
// If there is no req.session.cart, returns empty array.

router.get('/', (req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  res.json([...req.session.cart]);
});

//
// ==================================================
// POST, a user will hit this route when adding a product to the cart.
// The route adds product object to req.session.cart.

router.post('/', (req, res, next) => {
  // If the React App fails to hit the GET /api/cart-items,
  if (!req.session.cart) req.session.cart = [{...req.body, quantity: 1}];
  //
  //
  // Else if, the session cart is initialized, but does not contain the item
  // push the product object with the added key of 'quantity' and it set it to 1.
  else if (!req.session.cart.find(item => item.id === req.body.id))
    req.session.cart.push({...req.body, quantity: 1});
  //
  //
  // Else, find the product object in the session cart and increment the quantity by 1.
  else {
    const productIndex = req.session.cart.map(e => e.id).indexOf(req.body.id);
    req.session.cart[productIndex].quantity++;
  }

  res.json([...req.session.cart]);

  // Will need some error handling in this route.
  // For example, return a 400+/500+ code if a product is out of stock.
});
