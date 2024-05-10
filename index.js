const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8001;

console.log("Heyy iam vishal");

app.listen(port , () => console.log(`Server is Started at port ${port}`));