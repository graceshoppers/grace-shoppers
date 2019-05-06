const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();

module.exports = app;

//Static middleware
app.use(express.static(path.join(__dirname, 'public')));

//Parsing middleware
app.use('/', express.json());
app.use(express.urlencoded({extended: true}));

// Express session middleware
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: 'Grace Shopper has this big secret, which is...',
  })
);

//API middleware
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth/auth'));

//Routes
app.get('/', (req, res, next) => res.sendFile('index.html'));
app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
);
