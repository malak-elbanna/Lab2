const express = require('express');
const auth = require('./middleware/auth');
const router = express.Router();

router.use(auth);

router.use('/', require('./tasks/post'));
router.use('/', require('./tasks/get'));
router.use('/', require('./tasks/update'));
router.use('/', require('./tasks/delete'));

module.exports = router;