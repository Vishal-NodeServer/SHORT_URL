const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");


const port = 8001;
//connection for mongodb

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("mongodb is connected"));

app.use(express.json());


console.log("Heyy iam vishal");
app.use("/url" , urlRoute);

app.get("/:shortId" ,async (req , res) => {
    const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push: {
        vistHistory:{

      Timestamp: Date.now(),
        }
    },
});
   res.redirect(entry.redirectURL);
});

app.listen(port , () => console.log(`Server is Started at port ${port}`));