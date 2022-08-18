require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const DATABASE_URL = process.env.DATABASE_URL;
const port = process.env.PORT;

const AdsModel = require("./models/Ads")

app.use(express.json());
app.use(cors());


async function connectToDatabase(){ 
    await mongoose.connect(
        DATABASE_URL,    {
            UseNewUrlParser : true,
        }
    );
    console.log("connected")
}

connectToDatabase();

app.get("/Ads" ,async(req,res)=>{
    return await AdsModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result)
    }).clone().catch(function(err){ console.log(err)})
});


app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})