const User = require('@model/UserModel');

const jwt = require('jsonwebtoken');
const config = require('@config/index');

const authController = {
    login(req, res) {
        // Find user with requested email 
        User.findOne({ email: req.body.email }, function (err, user) {
            if (user === null) {
                return res.status(400).send({
                    message: "User not found."
                });
            }
            else {
                if (user.validPassword(req.body.password)) {
                    jwt.sign({ user }, config.jwt.secret, (error, token) => {
                        if (error) {
                        }
                        return res.status(201).send({
                            token,
                            message: "User Logged In",
                        })
                    })
                }
                else {
                    return res.status(400).send({
                        message: "Wrong Password"
                    });
                }
            }
        });
    },
    signup(req, res, next) {
        // Creating empty user object 
        let newUser = new User();
        // Initialize newUser object with request data 
        newUser.name = req.body.name;
        newUser.email = req.body.email;

        // Call setPassword function to hash password 
        newUser.setPassword(req.body.password);

        // Save newUser object to database 
        newUser.save((err, User) => {
            if (err) {
                return res.status(400).send({
                    message: "Failed to add user."
                });
            }
            else {
                return res.status(201).send({
                    message: "User added successfully."
                });
            }
        });
    },
}

module.exports = authController;