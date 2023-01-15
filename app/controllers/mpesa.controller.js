const { response } = require('express');
const axios = require('axios').default;
require('dotenv').config();

const Payment = require('../models/payment.model');


exports.getAccessToken = async (req, res, next) => {
      const consumer_key = process.env.CONSUMER_KEY;
      const consumer_secret = process.env.CONSUMER_SECRET;

      const url = process.env.OAUTH_TOKEN_URL;

      const buffer = new Buffer.from(consumer_key + ":" + consumer_secret);
      const auth = `Basic ${buffer.toString("base64")}`;

      try {
            let { data } = await axios.get(url, {
                  headers: {
                        "Authorization": auth
                  }
            });

            req.token = data["access_token"];
            res.send(req.token);
            return next();

      } catch (err) {
            return res.status(500).send({
                  success: false,
                  message: err['response']['statusText']
            });
      }
}

exports.lipaNaMpesa = async (req, res) => {

      let token = req.token;
      let auth = `Bearer ${token}`;

      ////////////////////////////////////
      //console.log("lipa na mpesa token: ", token);
      //console.log("Auth: ", auth);
      //////////////////////////////////////

      let timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);

      let url = process.env.STK_PUSH_URL; //update
      let bs_short_code = process.env.BUSINESS_SHORT_CODE; //update
      let pass_key = process.env.PASSKEY; //update
      let password = new Buffer.from(`${bs_short_code}${pass_key}${timestamp}`).toString("base64");
      let transaction_type = "CustomerPayBillOnline";
      let amount = req.body.salary;// amount sent from client
      let partyA = req.body.phone; //person sending money\
      let partyB = bs_short_code;
      let phone_number = partyA; //same as partyA
      let callback_url = process.env.CALLBACK_URL; //update -localhost:8000/api/mpesa/lipa-na-mpesa-callback
      let account_reference = "NannyHubLtd"; //should not exceed 12 characters
      let transaction_desc = "Client Payment";

      //const xData = {url, bs_short_code, pass_key, password, transaction_type, amount, partyA, partyB, phone_number, callback_url, account_reference, transaction_desc};
      //console.table(xData);
      //res.status(200).send({status: "ok", data: req.body});
      
      try {

            let { data } = await axios.post(url, {
                  "BusinessShortCode": bs_short_code,
                  "Password": password,
                  "Timestamp": timestamp,
                  "TransactionType": transaction_type,
                  "Amount": amount,
                  "PartyA": partyA,
                  "PartyB": partyB,
                  "PhoneNumber": phone_number,
                  "CallBackURL": callback_url,
                  "AccountReference": account_reference,
                  "TransactionDesc": transaction_desc
            }, {
                  "headers": {
                        "Authorization": auth
                  }
            }).catch(console.log);

            //console.log(data);
            
            return res.status(201).send( {status: "ok" ,message: data} );


      } catch (err) {

            return res.status(500).send({
                  status: "FAILED",
                  message: err
            });

      }


}

//get all payments
exports.getAllPayments = async (req, res) => {
      try {

            Payment.find({}, (err, payments) => {
                  if(err){
                        res.status(500).send({message: err.message});
                  }

                  res.status(200).send({status: "ok", data: payments})
            })

      } catch (err) {
            return res.send({
                  success: false,
                  message: err
            });
      }
}

//get payment by id
exports.getOnePayment = async (req, res) => {

      try {
            Payment.findById(req.params.id, (err, payment) => {
                  if(err){
                        res.status(500).send({message: err.message});
                  }

                  res.status(200).send({status: "ok", data: payment});
            });

      } catch (err) {
            return res.send({
                  success: false,
                  message: err
            });
      }
}

//save payment data to database
exports.lipaNaMpesaCallback = async (req, res) => {
     
      try {
            let message = req.body.Body.stkCallback["ResultDesc"]; //success or failed
            let items = req.body.Body.stkCallback.CallbackMetadata.Item; //array of items

            const paymentData = {
                  receiptNumber: items[1].Value,
                  amount: items[0].Value,
                  phone: items[4].Value,
                  date: items[3].Value
            }
            console.log("callback", message);
            //save payment data
            const payment =  new Payment(paymentData);

            payment.save((err, payment) => {
                  if(err){
                        res.status(500).send({message: err.message});
                  }

                  res.status(201).send({status: "ok", data: payment, message: "payment made successfully"});
            });

            

      } catch (err) {
            return res.send({
                  success: false,
                  message: err
            });
      }

}

//testing callback
exports.testCallback =  (req, res) => {

      console.table(req.body);
      //res.status(201).send({status: "ok", data: req.body});
      /*try {
      
            res.status(201).send({
                  data: req.body.Body,
                  message: "callback received"
            });
      } catch (err) {
            res.status(500).send({ message: err });
      }*/
}

