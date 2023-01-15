const config = require("../config/auth.config");
const User = require('../models/user.model');


const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//register new admin
exports.signup = async (req, res) => {

     console.log(User);

     try{
          const user = await User.create({
               username: req.body.username,
               email: req.body.email,
               password: bcrypt.hashSync(req.body.password, 8)
          });

          user.save((err, user) => {
               if (err) {
                    res.status(500).send({ message: err });
                    return;
               }

               res.status(200).send({ status: "ok", data: user, message: "User registered successfully" });
          })

     }
     catch(err){
          res.status(500).send({ message: err });
     }
}

//login admin
exports.login = async (req, res) => {

     //check email and password
     if ( !req.body.email || !req.body.password ) return res.status(400).send({ message: "Email and password are required" });

     try{
          User.findOne({
               email: req.body.email
          })
          .exec((err, user) => {
               if (err) {
                    res.status(500).send({ message: err });
                    return;
               }

               if (!user) {
                    return res.status(404).send({ message: "User not found" });
               }

               let passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
               );

               if (!passwordIsValid) {
                    return res.status(401).send({
                         accessToken: null,
                         message: "Invalid Password"
                    });
               }

               let token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 86400 //24 hours
               });

               const authUser = { //authenticated user
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    accessToken: token
               }

               res.status(200).send({ status: "ok", data: authUser, message: "User logged in successfully" });
          })

     }
     catch(err){
          res.status(500).send({ message: err });
     }

}

//logout admin
