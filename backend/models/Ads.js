const mongoose = require("mongoose")
const AdsSchema = new mongoose.Schema({
    companyId : {
        type : Number,
        required : true,
    },
    headline : {
        type : String,
        required : true,
    },
    imageUrl : {
        type : String,
        required : true,
    },
    primaryText : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
});

const Ad = mongoose.model("Ad",AdsSchema);  //new collection will create with name "Ads"
module.exports = Ad;
