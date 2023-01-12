
const controller = require('../controllers/nanny.controller');
const { filters } = require('../middlewares');

module.exports = function(app){
      app.use(function(req, res, next){
            res.header(
                  "Access-Contol-Allow-Headers",
                  "x-access-token, Origin, Content-Type, Accept"
            );
      
            next();
      });
      
      app.get('/api/nannies', controller.allNannies);
}