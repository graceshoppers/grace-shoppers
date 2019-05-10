const connection = require("../database");
const {
  Sequelize: { STRING, DOUBLE, TEXT, BOOLEAN }
} = connection;

const Product = connection.define("product", {
  name: {
    type: STRING,
    allowNull: false,
    notEmpty: true
  },
  material: {
    type: STRING,
    allowNull: false,
    notEmpty: true
  },
  description: {
    type: TEXT,
    allowNull: false,
    notEmpty: true
  },
  imageName: {
    type: STRING,
    defaultValue: ''
  },
  unitCost: {
    type: DOUBLE,
    allowNull: false,
    notEmpty: true
  },
  stock: {
    type: BOOLEAN,
    allowNull: false,
    notEmpty: true
  }
});

module.exports = Product;
