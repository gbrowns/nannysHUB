const express = require('express');
const app = express();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

const cors = require('cors');
const bodyParser = require('body-parser');

const requestRouter = require('./routes/requestRoutes');
const messageRouter = require('./routes/messageRoutes');
const userRouter = require('./routes/userRoutes');

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/requests', requestRouter);
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);

app.get("/api/nannies", (req, res) => {
    res.send("Nannies server is running");
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${LOCALHOST}`);
});
