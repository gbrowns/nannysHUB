const Nanny = require('../models/nanny.model');
const { sendEmail, helper } = require('../utils');

exports.allNannies = (req, res) => {
      Nanny.find({}, (err, nannies) => {
            if(err){
                  res.status(500).send({message: err});
                  return;
            }
      
            res.status(200).send(nannies);
      });
}

exports.nannyById = (req, res) => {
      Nanny.findById(req.params.id, (err, nanny) => {
            if(err){
                  res.status(500).send({message: err});
                  return;
            }
      
            res.status(200).send(nanny);
      });
}

exports.createNanny = async (req, res) => {

      try{
            const {firstname, lastname, email, phone, address, coords, gender, age, empStatus, salary, jobOptions, availability, agreementOptions, message} = req.body;
            const location = await helper.reverseGeocode(coords);
            const nannyData = {
                  firstname, lastname, email, phone, address, location ,gender,age,empStatus, salary, jobOptions, availability, agreementOptions,message
            }
            const nanny = new Nanny(nannyData)

            nanny.save((err, nanny) => {
                  if(err){
                        res.status(500).send({message: err.message});
                        return;
                  }

                  const mail = {
                        email: nanny.email,
                        subject: "REGISTARTION FOR NANNY ROLE",
                        message: `Hi ${nanny.firstname}, Your application for a nanny role has been recieved`
                  }

                  sendEmail(mail);
            
                  res.status(201).send({status: "ok", data: nanny, message: "Nanny created successfully"});
            });
      }catch(err){
            res.status(500).send({message: err.message});
      }
}

exports.updateNanny = (req, res) => {
      
      try{
            const nannyData = req.body;
            const id = req.params.id;

            Nanny.findByIdAndUpdate(id, nannyData, {new: true}, (err, nanny) => {
                  if(err){
                        res.status(500).send({message: err});
                        return;
                  }
                  //store deleated object in trash

                  res.status(200).send({status: "ok", data: nanny, message: "Nanny updated successfully"});
            });

            
      }catch(err){
            res.status(500).send({message: err});
      }
}

exports.deleteNanny = (req, res) => {
      try{
            const id = req.params.id;

            Nanny.findByIdAndDelete(id, (err, nanny) => {
                  if(err){
                        res.status(500).send({message: err});
                        return;
                  }
            
                  res.status(200).send({status: "ok", data: nanny, message: "Nanny deleted successfully"});
            });
      }catch(err){
            res.status(500).send({message: err});
      }
}