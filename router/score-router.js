const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const Score = require("../models/score-model")

router.get("/", async(req, res) => {
    try{
        const score = await Score.find()
        res.json({ success : true, message : "Score of all the players", score : score })
    }catch(error){
        res.json({ success : false, message: "Failed to upload the scores", error : error })
    }
})

router.post("/", async(req, res) => {
    try{
        const newScore = new Score(req.body)
        const score = await newScore.save()
        res.json({ success : true, message : "Uploaded new score", score : score })
    }catch(error){
        res.json({ success : false, message : " Failed to upload the score", error : error })
    }
})

module.exports = router