const { response } = require('express');

const axios = require('axios').default;
require('dotenv').config();

const getAccessToken = async (req, res, next) => {
    const consumer_key = process.env.CONSUMER_KEY;
    const consumer_secret = process.env.CONSUMER_SECRET;

    const url = process.env.OAUTH_TOKEN_URL;

    const buffer = new Buffer.from(consumer_key + ":" + consumer_secret);
    const auth = `Basic ${buffer.toString("base64")}`;

    try{
        let {data} = await axios.get(url, {
            headers: {
                "Authorization": auth
            }
        });

        req.token = data["access_token"];
        //res.send(req.token);
        return next();

    }catch(err){
        return res.send({
            success: false,
            message: err['response']['statusText']
        });
    }
}

const lipaNaMpesa = async (req, res) => {
    let token = req.token;
    let auth = `Bearer ${token}`;

    ////////////////////////////////////
    console.log("lipa na mpesa token: ", token);
    console.log("Auth: ", auth);

    let timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);

    let url = process.env.STK_PUSH_URL; //update
    let bs_short_code = process.env.BUSINESS_SHORT_CODE; //update
    let pass_key = process.env.PASSKEY; //update

    let password = new Buffer.from(`${bs_short_code}${pass_key}${timestamp}`).toString("base64");
    let transaction_type = "CustomerPayBillOnline";
    let amount = req.body.amount;// amount sent from client
    let partyA = req.body.phone; //person sending money\
    let partyB = bs_short_code;
    let phone_number = partyA; //same as partyA
    let callback_url = process.env.CALLBACK_URL; //update -localhost:8000/api/mpesa/lipa-na-mpesa-callback
    let account_reference = "NannyHubLtd"; //should not exceed 12 characters
    let transaction_desc = "Client Payment";

    try{
        let {data} = await axios.post(url, {
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
        }).catch(error => {
            console.log(error.response.data);
        })

        console.log(data);
        
        return res.send({
            success: true,
            message: data
        });


    }catch(err){

        return res.send({
            status: "FAILED",
            success: false,
            message: err['response']['statusText']
        });

    }


}

const lipaNaMpesaCallback = async (req, res) => {
    //let message = req.body.Body.stkCallback["ResultDesc"];

    //save transaction details to model
    console.log(res.body);
    return res.send({
        success: true,
        message: res.body
    })
}

module.exports = {
    getAccessToken,
    lipaNaMpesa,
    lipaNaMpesaCallback
}