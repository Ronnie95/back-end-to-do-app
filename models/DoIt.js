const mongoose = require('mongoose');

const DoItSchema = new.mongoose.Schema({

    do: {
        type:mongoose.Schema.Types.ObjectId,
        text: "string",
        unique: false
    }
})