const express = require('express');
const app = express();

const PORT = 8000;
const LOCALHOST = `http://localhost:${PORT}`;

app.get("/", (req, res) => {
    res.send("<h2>Nanny's Server Started</h2>");
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on ${LOCALHOST}`);
});
