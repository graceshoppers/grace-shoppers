const connection = require('../database');
const {
  Sequelize: {TEXT, INTEGER, STRING, BOOLEAN},
} = connection;

const Review = connection.define('review', {
  textBody: {
    type: TEXT,
    allowNull: false,
    validate: {
      len: [10],
      notEmpty: true,
    },
  },
  stars: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
      notEmpty: true,
    },
  },
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  recommended: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Review;
