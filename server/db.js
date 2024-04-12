const mongoose = require("mongoose");
const User = require("./models/user.model")

mongoose.connect("mongodb+srv://admin:xxnJCQSAiWu4Dj9@backenddb.d54ccom.mongodb.net/quiz-api?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.log("connection failed, error: " + err)
})

async function createuser(data){
    try{
        await User.create(data)
    }catch(err){
        return [500 ,err]
    }finally{
        return [200]
    }
}
function dummy(){

}
module.exports = {createuser, dummy}