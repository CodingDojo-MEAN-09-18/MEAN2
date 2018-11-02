const { bookController } = require('../controllers');
const router = require('express').Router();

//     /resource/:id  /api/books/:id

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);
