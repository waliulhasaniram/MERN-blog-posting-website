const express = require('express')
const router = express()
const authController = require('../controller/auth-controller')
const {signUpSchema} = require('../validator/auth-validator')
const {validateSignUp} = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/authMiddleware')

router.route('/').get(authController.Home)
router.route('/register').post(validateSignUp(signUpSchema), authController.register)
router.route('/login').post(authController.login)

router.route('/user').get(authMiddleware, authController.user)

module.exports = router