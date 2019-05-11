const connection = require('../database');
const {
  Sequelize: {STRING, BOOLEAN},
} = connection;

const User = connection.define('user', {
  firstName: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  lastName: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
  },
  email: {
    type: STRING,
    allowNull: false,
    notEmpty: true,
    isEmail: true,
    unique: {
      args: true,
      msg: 'There is already an account registered to this email.',

    },
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 20],
    },
  },
});

module.exports = User;
