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
require('./app/routes/user.routes')(app);



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

/*creates rows in the roles collection if they don't exist
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}*/



const PORT = process.env.PORT || 8000;
const LOCALHOST = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server is running on ${LOCALHOST}`);
});












//////////////////////////////////////////////////////////////////////////////////////////

/*
app.use("/", express.static(path.join(__dirname, "client/build")));

const requestRouter = require('./app/routes/requestRoutes');
//const messageRouter = require('./routes/messageRoutes');
const nannyRouter = require('./app/routes/nannyRoutes');
const adminRouter = require('./app/routes/adminRoutes');
const mpesaRouter = require('./app/routes/mpesaRoutes');

const Nanny = require("./app/models/Nanny");
const Request = require("./app/models/Request");
const paginatedResults = require("./app/middlewares/paginatedResults");
const auth = require("./app/middlewares/auth");
const mpesaAuth = require('./app/utils/mpesaOAuth');

//middleware
app.use(paginatedResults(Request)); //pagination middleware


//routes
app.use('/api/requests', requestRouter);
app.use('/api/nannies', paginatedResults(Nanny), nannyRouter);
app.use('/api/admin', adminRouter);
app.use('/api/mpesa',mpesaAuth, mpesaRouter);
//api documentation
app.get('/api', (req, res) => {
    res.send('<h2>Welcome to Nanny App API Documentation</h2><br><hr><br><h3>API Endpoints</h3><br><ul><li><a href="/api/requests">Requests</a></li><li><a href="/api/nannies">Nannies</a></li><li><a href="/api/admin">Admin</a></li></ul>');
});

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
