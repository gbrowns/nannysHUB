const express = require('express');
const router = express.Router();

const mpesa = require('../controllers/mpesaController');

//lipa na mpesa online (trigger payment processing to safaricom)
router.post('/lipa_na_mpesa', mpesa.lipaNaMpesa);

//lipa na mpesa online callback (save payment results to database)
router.post('/mpesa_callback', mpesa.lipaNaMpesaCallback);

//get all payments
router.get('/payments', mpesa.getPayments);

//get payment by id
router.get('/payments/:id', mpesa.getPaymentById);


module.exports = router;