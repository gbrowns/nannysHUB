module.exports = (app) => {
      
      const mail = require('../controllers/mail.controller.js');
      app.post('/api/mail/send', mail.send);
}