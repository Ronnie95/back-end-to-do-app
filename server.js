const express = require('express');
const app = express();    
const cors = require('cors');
const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})