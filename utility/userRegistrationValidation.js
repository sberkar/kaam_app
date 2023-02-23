const { check} = require("express-validator")

const registrationValidation = [
    check("username", "Username must be 3+ characters long.")
    .exists().isLength({min: 3}),
    check("email", "please enter a valid email")
    .exists().isEmail(),
    check("password", "Invalid password. Must be at least 8 characters long, contain uppercase and lowercase letters, and include a number and a special character.")
    .exists().isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1
    })
]

module.exports = registrationValidation;