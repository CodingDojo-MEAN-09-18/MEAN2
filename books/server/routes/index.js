const authRouter = require('./auth.routes');
const bookRouter = require('./book.routes');
const router = require('express').Router();

module.exports = router
  .use('/auth', authRouter)
  // .use(authMiddleware)
  .use('/books', bookRouter);
