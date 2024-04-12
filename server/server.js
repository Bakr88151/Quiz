const mongoose = require("mongoose");
const express = require('express');
const User = require("./models/user.model")

mongoose.connect("mongodb+srv://admin:xxnJCQSAiWu4Dj9@backenddb.d54ccom.mongodb.net/quiz-api?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.log("connection failed, error: " + err)
})

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send("all is fine!");
});


app.post("/createuser", async (req, res) => {
    const data = req.body;
    try{
        const user = await User.create(data)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err.message)
    }
})

app.listen(5000, () => {
    console.log("app runing on http://localhost:5000")
})
