const express = require('express');
const auth = require('./middleware/auth');
const router = express.Router();

router.use(auth);

router.use('/', require('./books/post'));
router.use('/', require('./books/get'));
router.use('/', require('./books/update'));
router.use('/', require('./books/delete'));
router.use('/', require('./books/borrow'));
router.use('/', require('./books/return'));

module.exports = router;