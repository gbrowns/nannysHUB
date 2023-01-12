const Nanny = require('../models/nanny.model')

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

exports.createNanny = (req, res) => {

      try{
            const nannyData = req.body;
            const nanny = new Nanny(nannyData)

            nanny.save((err, nanny) => {
                  if(err){
                        res.status(500).send({message: err});
                        return;
                  }
            
                  res.status(200).send({status: "ok", data: nanny, message: "Nanny created successfully"});
            });
      }catch(err){
            res.status(500).send({message: err});
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