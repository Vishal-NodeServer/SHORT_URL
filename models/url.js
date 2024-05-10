const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required:true,
        unique: true,

    },

    redirectURL:{
        type: String,
        required: true,
    },

    vistHistory:[{ timestamp: {type: Number }  }],
},{ timestamps: true }

);

const URL = mongoose.model("url" , userSchema);

module.exports = URL; //export just an variable const URL 