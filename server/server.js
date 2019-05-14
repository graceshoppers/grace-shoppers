const app = require('./app');
const {
  methods: {syncAndSeed, seedProducts},
} = require('./db/index');

const PORT = process.env.PORT || 3000;

seedProducts().then(() => {
  app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
});
//seed our db
// syncAndSeed()
//   .then(() => {
//     app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
//   });
