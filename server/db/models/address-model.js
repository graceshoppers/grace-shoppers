const connection = require('../database');
const {
  Sequelize: {STRING, TEXT, BOOLEAN},
} = connection;

const Address = connection.define('address', {
  addressName: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  addressLine1: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  addressLine2: {
    type: STRING,
  },
  city: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  state: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  ZIP: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  Country: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  additionalInstructions: {
    type: TEXT,
    defaultValue: '',
  },
  defaultAddress: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Address;
