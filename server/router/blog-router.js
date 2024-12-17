const express = require('express')
const router = express()
const blogController = require('../controller/blog-controller')
const {validateBlog} = require('../middleware/validate-middleware')
const {blogDataSchema} = require('../validator/auth-validator')
const authMiddleware = require('../middleware/authMiddleware')

router.route('/blog').post( validateBlog(blogDataSchema), blogController.createBlogs)

router.route('/getblog').get(blogController.getBlogs)

router.route('/getuserblogonly').get(authMiddleware, blogController.getUserBlogOnly)

router.route('/blog/getblog/:id').get(authMiddleware, blogController.getBlogId) // get data to update and set in the update form
router.route('/blog/update/:id').patch(authMiddleware, blogController.updateBlog)
router.route('/blog/delete/:id').delete(authMiddleware, blogController.deleteBlog)



module.exports = router