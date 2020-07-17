const router = require('express').Router();

const userController = require('@controller/userController');
const authController = require('@controller/authController');
const productController = require('@controller/productController');

const { verifyToken } = require('@middleware/accessToken');

router
    .get('/', userController.test)
    .post('/', verifyToken, userController.save)
    .post('/login', authController.login)
    .post('/signup', authController.signup)
    .get('/products', productController.get)
    .post('/products', productController.save)

module.exports = router;

