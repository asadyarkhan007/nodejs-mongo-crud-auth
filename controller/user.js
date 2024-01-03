const userService = require('../service/user')
const jwt = require('jsonwebtoken');


const register = (req, res) => {
    const {username, password} = req.body 
    const exist = userService.existByUsername(username)
    exist.then( (exist) => {
        if(exist) {
            res.status(400).json({"error": "User already exists"});
        }
        userService.register(username, password)
        res.status(201).json();   
    }).catch( (err) => {
        res.status(500).json({ "error": err});   

    });
   
  
   
}

const login = async (req, res) => {
    const {username, password} = req.body 
    let userId = await userService.login(username, password)
    console.log("success",userId)
    if(!userId) {
        res.status(401).json({"error": "Authentication failed!"});
    }else {

    const token = jwt.sign({ userId: userId }, 'secret', {
        expiresIn: '1h',
        });
    res.status(200).json({token}); 
    }
}

module.exports = {
    register,
    login
}