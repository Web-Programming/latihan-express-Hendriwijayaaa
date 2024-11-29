const passport = require('passport');
const Users = require('../models/user');

const login = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(404).json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res.status(200).json({token});
        } else {
            res.status(401).json(info);
        }
    })(req, res, next);
};
const register = (req, res) => {
    // Validate required fields, including username
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.username) {
        return res.status(400).json({ "message": "All fields required, including username" });
    }

    // Create a new user object
    const newUser = new Users();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.username = req.body.username; // Ensure username is set
    newUser.setPassword(req.body.password); // Assuming this method hashes the password
    
    // Try saving the user to the database
    newUser.save()
        .then((result) => {
            // On success, generate a JWT token and respond
            const token = newUser.generateJwt();
            res.status(200).json({ token });
        })
        .catch((err) => {
            // Check if the error is due to duplicate username
            if (err.code === 11000) {  // MongoDB duplicate key error
                return res.status(400).json({
                    message: "User with the same username or email already exists",
                    error: err
                });
            }
            // Handle other errors (validation, etc.)
            res.status(400).json({
                message: "Error registering user",
                error: err
            });
        });
};

module.exports = { register, login };



