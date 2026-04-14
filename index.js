const express = require("express");
const {connectToMongoDB} = require("./connect");

const URL = require("./models/url");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(()=> console.log("MongoDB connected"));

app.use(express.json());
app.use("/url",urlRoute);

app.get("/:shortId",async (req,res)=>{
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

app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});