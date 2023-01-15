const User = require('../models/user.model');

exports.allAccess = (req, res) => {
     res.status(200).send("Public content here")
}

exports.userBoard = (req, res) => {
     res.status(200).send("User Content")
}

exports.adminBoard = (req, res) => {
     res.status(200).send("Admin Content");
}

exports.moderator = (req, res) => {
     res.status(200).send("Moderator Content");
}

//getAllUsers
exports.getAllUsers = (req, res) => {
     User.find({}, (err, users) => {
          if(err){
               res.status(500).send({message: err});
               return;
          }

          res.status(200).send(users);
     });
}

//getUserById
exports.getUserById = (req, res) => {
     User.findById(req.params.id, (err, user) => {
          if(err){
               res.status(500).send({message: err});
               return;
          }

          res.status(200).send(user);
     });
}

//updateUserById
exports.updateUserById = (req, res) => {
     User.findByIdAndUpdate( req.params.id,{new: true}, (err, user) => {

          if(err){
               res.status(500).send({message: err});
               return;
          }

          res.status(200).send(user);
     })
}

//deleteUserById
exports.deleteUserById = (req, res) => {
     User.findByIdAndDelete(req.params.id, (err, user) => {
          if(err){
               res.status(500).send({message: err});
               return;
          }

          res.status(200).send(user);
     });
}