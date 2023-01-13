const { authJwt } = require('../middlewares');
const controller = require('../controllers/mpesa.controller');
const {mpesaOAuth} = require('../utils');

module.exports = function(app){
      app.use((req, res, next) => {
            res.header(
                  "Access-Contol-Allow-Headers",
                  "x-access-token, Origin, Content-Type, Accept"
            );

            next();
      });

      app.get('/api/mpesa/access-token', controller.getAccessToken);
      app.get('/api/mpesa/payments',[authJwt.verifyToken], controller.getAllPayments);
      app.get('/api/mpesa/payments/id', [authJwt.verifyToken], controller.getOnePayment);
      app.post('/api/mpesa/pay',[mpesaOAuth], controller.lipaNaMpesa);
      app.post('/callback', (req, res) => {
            console.table(req.body);
            //res.send(req.body);
      }) //lipNaMpesaCallback
}