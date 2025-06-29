const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');

const verifyToken = require('../middlewares/auth');
const {signup, login, me, carbonCalculator,checklog, getCarbonData ,logout}= require('../controllers/authController')

router.post('/signup', signup);
router.post('/login', login);
router.get('/me',me);
router.post('/calculator', verifyToken, carbonCalculator);
router.get('/check-today-log', verifyToken, checklog);
router.get('/carbon-data', verifyToken, getCarbonData);
router.post('/logout',logout);

module.exports = router;