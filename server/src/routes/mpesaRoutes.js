const express = require('express');
const router = express.Router();

const mpesa = require('../controllers/mpesaController');

//get auth token
router.get('/access_token', mpesa.getAccessToken);

//lipa na mpesa online
router.post('/lipa-na-mpesa', mpesa.lipaNaMpesa);

//lipa na mpesa online callback
router.post('/lipa-na-mpesa-callback', mpesa.lipaNaMpesaCallback);

module.exports = router;