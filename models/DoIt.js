require('../config/connection');
const mongoose = require('mongoose');

const DoItSchema = new mongoose.Schema({

    do: {
        type:String,
        required: [true, "it has to be something"],
        unique: false
    }
})

const DoIt = mongoose.model('DoIt', DoItSchema);

module.exports = DoIt;