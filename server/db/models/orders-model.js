const connection = require('../database');
const {
  Sequelize: {ENUM},
} = connection;

const Order = connection.define('order', {
  status: {
    type: ENUM(['Delivered', 'Processing', 'Shipped', 'Cart']),
    defaultValue: 'Cart',
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

// I would be beneficial to have some functionality
// for the cart on the Order model.
// Order.addHook('beforeCreate', (order, options) => {});

module.exports = Order;
