const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();

module.exports = app;

//static middleware
app.use(express.static(path.join(__dirname, 'public')));

//data logging middleware
app.use('/', express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: 'Grace Shopper has this big secret, which is...',
  })
);

//api middleware
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth/auth'));

//routes
app.get('/', (req, res, next) => res.sendFile('index.html'));
app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
);
