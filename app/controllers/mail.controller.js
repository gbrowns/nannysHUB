const {sendEmail} = require('../utils');
exports.send = async (req, res) => {
      const {email, subject, message} = req.body;
      if (!email || !subject || !message) return res.status(400).send({ message: "Email, Subject, Message are required" });

      try{
            await sendEmail({
                  email,
                  subject,
                  message
            });
      
            res.status(200).send({ status: "ok", message: "Email sent successfully" });
      }catch(err){
            res.status(500).send({ message: err });
      }
}