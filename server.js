require('dotenv').config();
const express = require('express');
const app = express();    
const doItController = require('./controllers/doIt');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(cors());


app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})