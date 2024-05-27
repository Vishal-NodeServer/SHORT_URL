const express = require("express");
const router = express.Router();
const { restrictTo } = require("../middlewares/auth");
const URL = require("../models/url");

router.get('/admin/urls' , restrictTo(['ADMIN']) , async (req ,res) => {
   const allurls = await URL.find({});
   return res.render("home.ejs" , {
      urls : allurls,
   });

});

router.get("/",restrictTo(['NORMAL' , 'ADMIN']), async (req , res) => {  //inline middleWare restrictTo(['NORMAL'])
  
const allurls = await URL.find({ createdBy: req.user._id});

 return res.render("home.ejs" , {
    urls : allurls,
 });

});
router.get("/signup" , (req ,res) => {
   return res.render("signup.ejs");
});

router.get("/login" , (req ,res) => {
   return res.render("login.ejs");
});


module.exports = router;
