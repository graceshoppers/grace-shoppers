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

module.exports = Order;
