const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/role');

router.get('/public', user.public);
router.get('/protected', authMiddleware, user.protected);
router.get('/admin', authMiddleware, roleMiddleware(['admin']), user.admin);
router.get('/moderator', authMiddleware, roleMiddleware(['admin', 'moderator']), user.moderator);

router.get('/profile', authMiddleware, user.profile);
router.put('/profile/update/:id', authMiddleware, user.update);
router.put('/profile/role/:id', authMiddleware, roleMiddleware(['admin']), user.updateRole);

module.exports = router;
