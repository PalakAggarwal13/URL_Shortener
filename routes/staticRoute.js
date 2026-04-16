const express = require("express");
const staticRoute = express.Router();
const URL = require("../models/url");

staticRoute.get("/",async function(req,res){
    const allUrls = await URL.find({});
    return res.render("home",{
        urls : allUrls,
    });
});


module.exports = staticRoute;