const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
require('dotenv').config();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;
const MONGODB_URI = process.env.DB_CONNECTION;
const options = { useNewUrlParser: true};

const cors = require('cors');
const bodyParser = require('body-parser');

const requestRouter = require('./routes/requestRoutes');
const messageRouter = require('./routes/messageRoutes');
const nannyRouter = require('./routes/nannyRoutes');
const adminRouter = require('./routes/adminRoutes');

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/requests', requestRouter);
app.use('/api/messages', messageRouter);
app.use('/api/nannies', nannyRouter);
app.use('/api/admin', adminRouter);


app.get("/api/service", (req, res) => {
    res.send("Nannies server is running");
});


//connect to mongoose
mongoose.connect(MONGODB_URI , options, (err) => {
    if (err) console.log(err)
    else console.log("Connected to mongoose");
});

app.listen(PORT, () =>{
    console.log(`Server is running on ${LOCALHOST}`);
});

/*
nanny -> application -> receive email 
admin -> approve all requests
client -> find a nanny (location) -> payment
*/
