const express = require('express');
const auth = require('./middleware/auth');
const router = express.Router();

router.use(auth);

router.use('/', require('./authors/post'));
router.use('/', require('./authors/get'));
router.use('/', require('./authors/update'));
router.use('/', require('./authors/delete'));

module.exports = router;