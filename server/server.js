const app = require('./app');
const {
  methods: {syncAndSeed, seedProducts},
} = require('./db/index');

const PORT = process.env.PORT || 3000;

//seed our db
// syncAndSeed();
seedProducts();

app.listen(PORT, () => console.log(`listening on ${PORT}`));
