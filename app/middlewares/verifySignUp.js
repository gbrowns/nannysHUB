const User = require("../models/user.model"); //import user model

//check for dublicate keys
const checkDuplicateUsernameOrEmail = async (req, res, next) => {

     //username
     User.findOne({
          username: req.body.username
     }).exec((err, user) => {
          if (err){
               res.status(500).send({message: err});
               return;
          }
          if (user){
               res.status(400).send({message: "Failed! Username is already in use"});
               return;
          }
     });

     //email
     User.findOne({
          email: req.body.email
     }).exec((err, user) => {
          if (err){
               res.status(500).send({message: err});
               return;
          }
          if (user){
               res.status(400).send({message: "Failed! Email is already in use"});
               return;
          }
     })
   
}



const verifySignUp = {
     checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;