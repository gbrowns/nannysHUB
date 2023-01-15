const axios = require('axios').default;
require('dotenv').config();

module.exports = async (req, res, next) => {
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
        //res.send(req.token);
        return next();

    } catch (err) {
        return res.send({
            success: false,
            message: err['response']['statusText']
        });
    }
}

