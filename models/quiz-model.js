const mongoose = require("mongoose")

const QuizSchema = mongoose.Schema({
   categoryId : { type : mongoose.Schema.Types.ObjectId, ref : "Category" }, 
   question : { type : String, required : true },
   correctOption : String,
   incorrectOption : [],
   explanation : { type : String, required : true }
})

module.exports = mongoose.model("Quiz", QuizSchema)