const express = require('express');
const app = express();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

const cors = require('cors');
const bodyParser = require('body-parser');

//middleware
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, (req, res)=>{
    console.log(`Server is running on ${LOCALHOST}`);
});
