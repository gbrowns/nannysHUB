//all request made for nannies
/**
 * - should have
 * - customer firstname + lastname
 * - customer email + phone
 * - customer gender + message
 * - nanny requested reference to nannies
 * - state - paid = true/false
 */
const Order = require('../models/orders.model');

exports.allOrders = (req, res) => {
      Order.find({}, (err, orders) => {
            if(err){
                  res.status(500).send({message: err});
                  return;
            }
      
            res.status(200).send(orders);
      });
}

exports.orderById = (req, res) => {
      Order.findById(req.params.id, (err, order) => {
            if(err){
                  res.status(500).send({message: err});
                  return;
            }
      
            res.status(200).send(order);
      });
}

exports.createOrder = (req, res) => {
      
      try{
            //firstname, lastname, email, phone, gender, message, nannyId, paid
            //const orderData = req.body;
            const order = new Order(req.body);

            order.save((err, order) => {
                  if(err){
                        res.status(500).send({message: err});
                        return;
                  }
            
                  res.status(200).send({status: "ok", data: order, message: "Order created successfully"});
            });
      }catch(err){
            res.status(500).send({message: err});
      }
}

exports.updateOrder = async (req, res) => {
            
      try{
            //const orderData = req.body;
            //const id = req.params.id;

            const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(200).send({ status: "ok", data: order, message: "Order updated successfully" });
      }catch(err){
            res.status(500).send({message: err});
      }
}

exports.deleteOrder = (req, res) => {
      try{
            const id = req.params.id;

            Order.findByIdAndDelete(id, (err, order) => {
                  if(err){
                        res.status(500).send({message: err});
                        return;
                  }
                  //store deleted object in trash
                  
                  res.status(200).send({status: "ok", data: order, message: "Order deleted successfully"});
            })
      }catch(err){
            res.status(500).send({message: err});
      }
}

