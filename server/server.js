const app = require('./app');
const {
  methods: {syncAndSeed},
} = require('./db/index');

const PORT = process.env.PORT || 3000;

//seed our db
syncAndSeed()
  .then(() => {
    app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
  });
