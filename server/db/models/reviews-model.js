const connection = require("../database");
const {
  Sequelize: { TEXT, INTEGER }
} = connection;

const Review = connection.define("review", {
  textBody: {
    type: TEXT,
    allowNull: false,
    validate: {
      len: [10],
      notEmpty: true
    }
  },
  stars: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
      notEmpty: true
    }
  }
});

module.exports = Review;
