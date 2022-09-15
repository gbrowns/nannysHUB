const axios = require('axios').default;
require('dotenv').config();

const getAccessToken = async () => {
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

        return next();

    }catch(err){
        return resizeBy.send({
            success: false,
            status: "FAILED",
            message: err['response']['statusText']
        });
    }
}

const lipaNaMpesa = async (req, res) => {
    let token = req.token;
    let auth = `Bearer ${token}`;

    let timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, -3);

    let url = process.env.STK_PUSH_URL; //update
    let bs_short_code = process.env.BUSINESS_SHORT_CODE; //update
    let pass_key = process.env.PASSKEY; //update

    let password = new Buffer.from(`${bs_short_code}${pass_key}${timestamp}`).toString("base64");
    let transaction_type = "CustomerPayBillOnline";
    let amount = "1";
    let partyA = req.body.phone; //person sending money\
    let partyB = bs_short_code;
    let phone_number = partyA; //same as partyA
    let callback_url = process.env.CALLBACK_URL; //update -localhost:8000/api/mpesa/lipa-na-mpesa-callback
    let account_reference = "Nanny Hub";
    let transaction_desc = "Payment for Nanny Hub services";

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
            headers: {
                "Authorization": auth
            }
        }).catch(console.log);

        return res.send({
            success: true,
            status: "SUCCESS",
            message: "Payment request sent successfully",
            data: data
        });

    }catch(err){
        return res.send({
            success: false,
            status: "FAILED",
            message: err['response']['statusText']
        });

    }


}

const lipaNaMpesaCallback = async (req, res) => {
    let message = req.body.Body.stkCallback["ResultDesc"];

    console.log(body);
    return res.send({
        success: true,
        message
    })
}

module.exports = {
    getAccessToken,
    lipaNaMpesa,
    lipaNaMpesaCallback
}