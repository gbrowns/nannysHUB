const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const morgan = require('morgan');
const cookieSession = require('cookie-session');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use(express.urlencoded({extended: true})); //parse requests of content-type - application/x-www-form-urlencoded

app.use(
    cookieSession({
        name: 'session',
        secret: process.env.COOKIE_SECRET,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
);


//routes
require('./app/routes/auth.routes')(app);
require('./app/routes/mail.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/nanny.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/mpesa.routes')(app);



const dbConfig = require('./app/config/db.config');

//connect to mongo db
dbConfig.mongoose
    .connect(`${dbConfig.URL}`, dbConfig.OPTIONS)
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

const PORT = process.env.PORT || 8000;
const LOCALHOST = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${LOCALHOST}`);
});

//module.exports = app;










//////////////////////////////////////////////////////////////////////////////////////////

/*



app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (_, res) => {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        (err) => {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});
*/
