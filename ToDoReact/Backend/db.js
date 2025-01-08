const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:ZE1B5Kiwfit3uF81@appdb.cdmoc.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model("todo",todoSchema);

module.exports={
    todo,
}