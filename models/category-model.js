const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    quizName : { type : String, required : true },
    imageURL : { type : String, required : true },
    quizDetails : { 
       totalQuestions :  {type : Number, required : true },
       totalPoints : { type : Number , required : true },
       difficulty : { type : String, required : true },
       totalTime : { type : String, required : true },
       correctAnswer : { type :Number, required : true },
       incorrectAnswer : { type : Number, required : true }
    } 
})

module.exports = mongoose.model("Category", CategorySchema)