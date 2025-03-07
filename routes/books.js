const express = require('express');
const auth = require('./middleware/auth');
const router = express.Router();

router.use(auth);

router.use('/books', require('./books/post'));
router.use('/books', require('./books/get'));
router.use('/books', require('./books/update'));
router.use('/books', require('./books/delete'));
router.use('/books', require('./books/borrow'));
router.use('/books', require('./books/return'));

module.exports = router;