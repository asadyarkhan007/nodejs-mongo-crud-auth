const mongoose = require('mongoose')
const { userSchema } = require('../schema/user')
const userModel = mongoose.model('users', userSchema)

module.exports = {
    userModel
}