const app = require('./app');
const {
  methods: {syncAndSeed},
} = require('./db/index');

const PORT = process.env.PORT || 3000;

//seed our db
syncAndSeed();

app.listen(PORT, () => console.log(`listening on ${PORT}`));
