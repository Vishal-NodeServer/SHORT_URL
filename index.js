const express = require("express"); 
const path = require("path"); //just this dont't need to install this already buildin 
const app = express();
const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");


const port = 8002;
//connection for mongodb

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("mongodb is connected"));

app.set("view enginee" , "ejs");
app.set("views" , path.resolve("./views"));





app.use(express.json());


app.use("/test" ,async (req , res) =>{
    const allUrls = await URL.find({});
   return res.render('home');
});


app.use("/url" , urlRoute);

app.get("/url/:shortId" ,async (req , res) => {
    const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
        vistHistory:{

      Timestamp: Date.now(),
        }
    },
});
   res.redirect(entry.redirectURL);
});

app.listen(port , () => console.log(`Server is Started at port ${port}`));