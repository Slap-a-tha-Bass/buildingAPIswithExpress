const express = require('express');
const router = express.Router();
const chirpsRouter = require('./chirps');
const usersRouter = require('./users');

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

module.exports = router;