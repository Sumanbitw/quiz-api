const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const CategorySchema = require("../models/category-model")

router.get("/", async (req, res) => {
    try{
        const quizzes = await CategorySchema.find()
        res.status(200).json(quizzes)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

router.post("/", async (req, res) => {
    const newQuizzes = new CategorySchema({
        quizName : req.body.quizName,
        quizDetails : req.body.quizDetails
    })
    try{
        const savedQuiz = await newQuizzes.save()
        res.status(201).json(savedQuiz)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

router.patch("/:categoryId", async (req, res) => {
    try {
        const updatedQuiz = await CategorySchema.updateOne({_id : req.params.categoryId}, {$set : { imageURL : req.body.imageURL}})
        res.status(200).json(updatedQuiz)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

router.get("/:categoryId", async (req, res) => {
    try{
        const quizzes = await CategorySchema.findOne({ _id : req.params.categoryId })
        res.status(200).json(quizzes)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

module.exports = router