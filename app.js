const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const port = process.env.PORT || 3005

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}
))

const quizRoute = require("./router/quiz-router")
const categoryRoute = require("./router/category-router")
const loginRoute = require("./router/login-router")
const signupRoute = require("./router/signup-router")
const scoreRouter = require("./router/score-router")

app.get("/",(req,res) => {
    res.send("Quiz backeend")
})

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology:true}, () =>{
    console.log("connected to db")
})

app.use("/quiz", quizRoute)
app.use("/category", categoryRoute)
app.use("/login", loginRoute)
app.use("/signup", signupRoute)
app.use("/score", scoreRouter)

app.listen(port)