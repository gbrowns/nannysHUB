const express = require('express');
const app = express();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

const cors = require('cors');
const bodyParser = require('body-parser');

//const nannyRouter = require('./routes/post');
//const clientRouter = require('./routes/user');

//middleware
app.use(cors());
app.use(bodyParser.json());

//app.use("/clients", clientRouter);
//app.use("/nannies", postRouter);

app.get("/api/nannies", (req, res) => {
    res.send("Nannies server is running");
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${LOCALHOST}`);
});
