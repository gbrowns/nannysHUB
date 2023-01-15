const { verifySignUp } = require('../middlewares');
const controller = require ('../controllers/auth.controller');


module.exports = (app) => {
     app.use(function(req, res, next){
          res.header(
               "Access-Control-Allow-Origin",
               "x-access-token, Origin, Content-Type, Accept"
          );
          next();
     });

     app.post("/api/auth/signup", controller.signup);

     app.post("/api/auth/login", controller.login);
}