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