const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;
const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionsecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000,
  },
};

require('./server/config/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser('alskdjflkajsbdflkajsbdflkasjbdflakjbsdflkaf'));
app.use(session(sessionConfig));
app.use(function(request, response, next) {
  console.log(`incoming request for ${request.url}`);

  next();
});
app.use(express.static(path.resolve('dist/public')));
app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catch-all.route'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
