const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {userModel} = require('../model/user.js')

async function register(username , plainPassword) {
    try {

    password = bcrypt.hashSync(plainPassword, 5)
    const newUser = new userModel({username, password})
    await newUser.save();
       
    }
    catch(err) {
        throw err
    }
}

async function existByUsername(username) {
    try {
      let users = await userModel.find({ username: username }).exec();
      return users && users.length > 0;
    } catch (err) {
      throw err;
    }
  }

async function login(username, plainPassowrd) {
    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return 0;
        }
        const passwordMatch = await bcrypt.compareSync(plainPassowrd, user.password);

        if (!passwordMatch) {
            return 0;
        }
       return user._id;
    } catch(err) {
        throw err
    }
}


module.exports = {
    register,
    existByUsername,
    login
}