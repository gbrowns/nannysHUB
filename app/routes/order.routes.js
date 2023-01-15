const { authJwt } = require('../middlewares');
const controller = require('../controllers/order.controller');
const { filters } = require('../middlewares');

module.exports = function(app){
      app.use(function(req, res, next){
            res.header(
                  "Access-Contol-Allow-Headers",
                  "x-access-token, Origin, Content-Type, Accept"
            );
      
            next();
      });
      
      app.get('/api/orders', [authJwt.verifyToken], controller.allOrders);
      app.get('/api/orders/:id', [authJwt.verifyToken], controller.orderById);
      app.post('/api/orders', controller.createOrder); //no auth - public client making requests
      app.patch('/api/orders/:id', [authJwt.verifyToken], controller.updateOrder);
      app.delete('/api/orders/:id', [authJwt.verifyToken], controller.deleteOrder);
}