const express = require('express');
const router = express.Router();

// const userRoute = require('./user.route');
const authRoute = require('./auth.route');
// const tabledataRoute = require('./tabledata.route');

// router.use('/user', userRoute);
router.use('/auth', authRoute);
// router.use('/tabledata', tabledataRoute);

module.exports = router;