const {z} = require('zod')

const signUpSchema = z.object({
    username: z
    .string({required_error: "name is required"})
    .min(3, {message: "name must have 3 chars"})
    .max(30, {message: "name cannot have more than 30 chars"})
    .trim(),

    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "this is not a email"}),

    password: z
    .string({required_error: "password is required"})
    .trim()
    .min(6, {message: "minimum 6 chars in the password"})
    .max(100, {message: "maximum 100 chars in the password"}),

    phone: z
    .string({required_error: "phone number is required"})
    .min(11, {message: "minimum 11 chars in the phone number"})    

})

const contactSchema = z.object({
    username: z
    .string({required_error : "name is required"})
    .trim()
    .min(3, {message: "minimum 3 chars in the name"})
    .max(30, {message: "maximum 30 chars in the name"}),

    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "thsi is not a valid email"}),

    message: z
    .string({required_error : "message is required"})
    .trim()
    .min(5, {message: "minimum 5 chars in the message"})
    .max(1200, {message: "maximum 1200 chars in the message"})
})

const blogDataSchema = z.object({
    username: z
    .string({required_error : "name is required"})
    .trim()
    .min(3, {message: "minimum 3 chars in the name"})
    .max(30, {message: "maximum 30 chars in the name"}),

    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "thsi is not a valid email"}),

    blog: z
    .string({required_error: 'one need to write a blog'})
    .trim()
    .min(9, {message: "minimum 9 chars in the blog"})
    .max(5000, {message: "maximum 5000 chars in the blog"})
})

module.exports = {signUpSchema, contactSchema, blogDataSchema}