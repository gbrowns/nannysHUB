const {authJwt} = require('../middlewares');
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
      app.get('/api/nannies/:id', controller.nannyById);
      app.post('/api/nannies/apply', controller.createNanny);
      app.patch('/api/nannies/:id', [authJwt.verifyToken], controller.updateNanny);
      app.delete('/api/nannies/:id', [authJwt.verifyToken], controller.deleteNanny);
}