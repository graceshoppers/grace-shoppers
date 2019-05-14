const router = require('express').Router();
const {
  models: {Order, Orderitem, Product},
} = require('../../db');
const Sequelize = require('sequelize');

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

router.post('/', async (req, res, next) => {
  if (req.session.userDetails && req.session.userDetails.id) {
    const userId = req.session.userDetails.id;

    // If user is logged in, get user's cart
    const userCart = await Order.findOne({
      where: {[Sequelize.Op.and]: [{userId}, {status: 'Cart'}]},
    });

    // Next, if there is a line item in the cart for the product trying to be added,
    // we will need to increase the quantity.
    const itemExistsInCart = await Orderitem.findOne({
      where: {
        [Sequelize.Op.and]: [{orderId: userCart.id}, {productId: req.body.id}],
      },
    });

    if (itemExistsInCart)
      await Orderitem.update(
        {quantity: itemExistsInCart.quantity + 1},
        {where: {id: itemExistsInCart.id}}
      );
    else
      await Orderitem.create({
        orderId: userCart.id,
        productId: req.body.id,
        quantity: 1,
      });

    // Retrieve the updated cart to mount onto req.session.cart to give back to Redux store.
    const updatedCart = await Order.findOne({
      where: {[Sequelize.Op.and]: [{userId}, {status: 'Cart'}]},
      include: [{model: Orderitem, include: [Product]}],
    });

    req.session.cart = updatedCart.orderitems.map(item => {
      return {...item.product.get(), quantity: item.quantity};
    });
    return res.json([...req.session.cart]);
  }
  // =============================================
  // This section is users that are NOT logged in.

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

module.exports = router;
