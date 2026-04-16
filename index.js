const express = require("express");
const {connectToMongoDB} = require("./connect");
const path = require("path");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(()=> console.log("MongoDB connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/url",urlRoute);
app.use("/",staticRoute);

app.get("/test",async(req,res)=>{
    const allUrls = await URL.find({});
    return res.render("home",{
        urls : allUrls,
    });
});

app.get("/url/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitedHistory:{
            timestamp : Date.now(),
        },
    }});

    return res.redirect(entry.redirectURL);
});

app.get("/clear",async (req,res)=>{
    await URL.deleteMany({});
    res.send("All urls deleted");
});

app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});