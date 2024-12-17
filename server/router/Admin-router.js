const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/Admin-middleware')
const adminController = require('../controller/Admin-controller')
const router = express()

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUser)
router.route('/users/:id').delete(authMiddleware, adminMiddleware, adminController.deleteOneUser)
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUser)

router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContact)
router.route('/contacts/:id').delete(authMiddleware, adminMiddleware, adminController.deleteOneContact)

router.route('/blogs').get(authMiddleware, adminMiddleware, adminController.getAllBlogs)
router.route('/blogs/:id').delete(authMiddleware, adminMiddleware, adminController.deleteOneBlog)

module.exports = router