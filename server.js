require('dotenv').config();
const express = require('express');
const app = express();    
const doItController = require('./controllers/doIt');
const cors = require('cors');
const morgan = require('morgan');
//const { Specials } = require('./models')
const PORT = process.env.PORT || 4000;

//const { Specials } = require('./models')

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use('/do', doItController);

app.get('/', (req, res) => {
    res.json('hello')
})

app.get('/*', (req, res) => {
    res.json({comment: "This is a bad URL"});
})


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})