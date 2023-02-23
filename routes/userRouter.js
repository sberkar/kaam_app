const router = require("express").Router();
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

const User = require("../models/User")
const registrationValidation = require("../utility/userRegistrationValidation");

router.post("/", registrationValidation, (req, res) => {
    let errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json(errors.array().map(e => { return { message: e.msg, field: e.param }}))
    }

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email}).then(user => {
        if(user){
            return res.status(400).json({
                error: {
                    message: "email already exists"
                }
            })
        }
        bcrypt.hash(password, 12).then(hashpass => {
            let user_object = new User({username, email, password: hashpass});
            user_object.save().then(u => {
                res.status(201).json({
                    success: {
                        message: "user created successfully",
                        id: u._id
                    }
                })
            }).catch(err => {
                res.status(500).json({error:{
                    message: "user creation failed. please retry"
                }})
            })
        }).catch(err => console.log(err))
    })
});

module.exports = router