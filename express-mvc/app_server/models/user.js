
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User schema definition
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensure email is unique
    username: { type: String, required: true, unique: true }, // Ensure username is unique
    password: { type: String, required: true }
});

// Method to hash password
userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, 10);
};

// Method to generate JWT
userSchema.methods.generateJwt = function() {
    return jwt.sign({ _id: this._id }, 'your-secret-key', { expiresIn: '1h' });
};

// Create and export User model
const users = mongoose.model('User', userSchema);
module.exports = Users;


const Users = mongoose.model('User', userSchema);
module.exports = Users;