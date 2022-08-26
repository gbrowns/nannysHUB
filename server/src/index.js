const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
require('dotenv').config();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

const cors = require('cors');
const bodyParser = require('body-parser');

const requestRouter = require('./routes/requestRoutes');
const messageRouter = require('./routes/messageRoutes');
const nannyRouter = require('./routes/nannyRoutes');

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/requests', requestRouter);
app.use('/api/messages', messageRouter);
app.use('/api/nannies', nannyRouter);

app.get("/api/nannies", (req, res) => {
    res.send("Nannies server is running");
});

//connect to mongoose
mongoose.connect(process.env.DB_CONNECTION , { useNewUrlParser: true }, () => {
    console.log('connected to mongoose db');
});

app.listen(PORT, () =>{
    console.log(`Server is running on ${LOCALHOST}`);
});
