require('../config/connection');
const mongoose = require('mongoose');

const DoItSchema = new mongoose.Schema({

    do: {
        type:mongoose.Schema.Types.ObjectId,
        text: "string",
        unique: false
    }
})

const DoIt = mongoose.model('DoIt', DoItSchema);

module.exports = DoIt;