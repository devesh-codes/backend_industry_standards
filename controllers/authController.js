const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")




module.exports.registerUser = async (req,res)=>{
    try{
      let {fullname, email, password} = req.body
      let user = await userModel.findOne({email:email})
      if(user){
        return res.status(401).send("user already exist")
      }
      bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
          if(err){
            return res.send(err.message)
            
          }else{
            let createdUser =  await userModel.create({
              fullname,
              email,
              password: hash
             })
            
            let token =  generateToken(createdUser)
            res.cookie("token", token);
            res.send("user created successfully")
          
          }
        })
      })
  
     
    }catch(err){
      res.send(err.message)
    }
  }