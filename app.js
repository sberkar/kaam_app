const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
require("dotenv").config()

const userRouter = require("./routes/userRouter")

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization")
    res.setHeader('Access-Control-Allow-Methods', "GET,POST,PUT,PATCH,DELETE")
    next()
})

app.use("/user", userRouter)


mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT || 8000, () => console.log("app started"));
}).catch(err => console.log(err))