const express = require('express')
const router = express()
const contactController = require('../controller/contact-controller')
const {contactSchema} = require('../validator/auth-validator')
const {validateContact} = require('../middleware/validate-middleware')

router.route("/contact").post(validateContact(contactSchema), contactController)

module.exports = router

