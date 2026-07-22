const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error:'url is required'});
    }

    const existing = await URL.findOne({redirectURL : body.url});

    if(existing){
        return res.render("home",{
            id : existing.shortId,
        });
    }

    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitedHistory : [],
    });

    return res.render("home",{
        id : shortID,
    });
}

async function handleGetAnalytics(req,res){
const shortId = req.params.shortId;
const result = await URL.findOne({shortId});
if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
}
return res.render("analytics",{
        url: result
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};