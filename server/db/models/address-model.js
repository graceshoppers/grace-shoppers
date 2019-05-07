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
  zip: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  country: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  additionalInstruction: {
    type: TEXT,
    defaultValue: '',
  },
});

module.exports = Address;
