const express = require('express');
const auth = require('../routes/middleware/auth'); 
const router = express.Router();

router.use(auth);

router.use('/', require('./blogs/post'));
router.use('/', require('./blogs/get'));
router.use('/', require('./blogs/update'));
router.use('/', require('./blogs/delete'));

module.exports = router;