const express = require("express")
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const QuizSchema = require("../models/quiz-model")

router.get("/:categoryId", async (req, res) => {
    try{
        const quizzes = await QuizSchema.find()
        res.status(200).json(quizzes)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

router.post("/:categoryId", async (req, res) => {
    const newQuizzes = new QuizSchema({
       categoryId : req.params.categoryId,
       question : req.body.question,
       correctOption : req.body.correctOption,
       incorrectOption : req.body.incorrectOption,
       explanation : req.body.explanation
    })
    try{
        const savedQuiz = await newQuizzes.save()
        res.status(201).json(savedQuiz)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

router.get("/", async (req, res) => {
    try {
        const quizzes = await QuizSchema.find()
        res.status(200).json(quizzes)
    }catch(error){
        res.status(500).json({ message : error })
    }
})

module.exports = router