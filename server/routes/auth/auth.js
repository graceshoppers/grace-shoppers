const {
  models: {User},
} = require('../../db');
const router = require('express').Router();
module.exports = router;

// Example model of req.session.user

// req.session.user = {
//     info: {
//         "id": 1,
//         "firstName": "Bao",
//         "lastName": "Nguyen",
//         "email": "baonguyen@email.com",
//         "isAdmin": true,
//         "password": "password",
//         "createdAt": "2019-05-03T19:51:52.103Z",
//         "updatedAt": "2019-05-03T19:51:52.103Z"
//     },
//     cartItems: [
//         {
//             "id": 1,
//             "name": "Butterfly Ring",
//               ...cut for brevity
//             "category": {
//                 "id": 1,
//                 "name": "Rings",
//                   ...cut for brevity
//             }
//         },
//         {
//             "id": 2,
//             "name": "JUSTE UN CLOU Bracelet",
//               ...cut for brevity
//             "category": {
//             "id": 3,
//             "name": "Bracelets",
//               ...cut for brevity
//             }
//         },
//     ],
// }

// Checks if there is a user currently logged in
router.get('/', (req, res, next) => {
  res.json(req.session.user);
});

// Checks if login credentials match values in database
router.post('/login', async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    let error = null;

    if (!user) error = 'No user found with given email.';
    else if (user.password !== password) error = 'Incorrect password.';
    else req.session.user = {info: user, cartItems: []};

    res.send(req.session.user);
  } catch (err) {
    return next(err);
  }
});
