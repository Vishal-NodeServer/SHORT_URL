const mongoose = require("mongoose");

//Schema    
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
//Schema  --End

//Model
const URL = mongoose.model("url" ,urlSchema);


module.exports = URL; //export just an variable const URL 